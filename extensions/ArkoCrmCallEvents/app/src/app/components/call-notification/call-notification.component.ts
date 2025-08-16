import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProcessService, SystemConfigStore } from 'core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-call-notification',
  templateUrl: './call-notification.component.html',
  styleUrls: ['./call-notification.component.css']
})
export class CallNotificationComponent implements OnInit, OnDestroy {
  private eventSource: EventSource;
  private subscription: Subscription;

  public showBanner = false;
  public callerNumber: string;
  public callerName: string;
  public recordId: string;
  public recordModule: string;

  constructor(
    private processService: ProcessService,
    private router: Router,
    private systemConfigStore: SystemConfigStore
  ) { }

  ngOnInit(): void {
    if (this.systemConfigStore.getConfigValue('arkocrm.call_events.enabled')) {
      this.eventSource = new EventSource('/arkocrm/call-events/stream');
      this.eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        this.callerNumber = data.caller_number;
        this.searchCaller(this.callerNumber);
      };
    }
  }

  ngOnDestroy(): void {
    if (this.eventSource) {
      this.eventSource.close();
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  searchCaller(phoneNumber: string) {
    const searchPayload = {
      "data": {
        "type": "process",
        "attributes": {
          "name": "search",
          "module": "Contacts",
          "params": {
            "q": phoneNumber
          }
        }
      }
    };
    this.subscription = this.processService.run(searchPayload).subscribe(
      (response: any) => {
        if (response && response.data && response.data.length > 0) {
          this.callerName = response.data[0].attributes.name;
          this.recordId = response.data[0].id;
          this.recordModule = 'Contacts';
          this.showBanner = true;
        } else {
          this.searchLeads(phoneNumber);
        }
      },
      (error) => {
        console.error('Error searching contacts:', error);
        this.searchLeads(phoneNumber);
      }
    );
  }

  searchLeads(phoneNumber: string) {
    const searchPayload = {
      "data": {
        "type": "process",
        "attributes": {
          "name": "search",
          "module": "Leads",
          "params": {
            "q": phoneNumber
          }
        }
      }
    };
    this.subscription = this.processService.run(searchPayload).subscribe(
      (response: any) => {
        if (response && response.data && response.data.length > 0) {
          this.callerName = response.data[0].attributes.name;
          this.recordId = response.data[0].id;
          this.recordModule = 'Leads';
          this.showBanner = true;
        } else {
          this.callerName = 'Unknown Caller';
          this.recordId = null;
          this.recordModule = null;
          this.showBanner = true;
        }
      },
      (error) => {
        console.error('Error searching leads:', error);
        this.callerName = 'Unknown Caller';
        this.recordId = null;
        this.recordModule = null;
        this.showBanner = true;
      }
    );
  }

  openCallerRecord() {
    if (this.recordId && this.recordModule) {
      this.router.navigate([this.recordModule, this.recordId]);
    }
    this.closeBanner();
  }

  createNewLead() {
    this.router.navigate(['Leads', 'create'], { queryParams: { phone_mobile: this.callerNumber } });
    this.closeBanner();
  }

  closeBanner() {
    this.showBanner = false;
  }
}
