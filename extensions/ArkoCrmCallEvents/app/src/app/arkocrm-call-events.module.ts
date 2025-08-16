import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallNotificationComponent } from './components/call-notification/call-notification.component';

@NgModule({
  declarations: [
    CallNotificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CallNotificationComponent
  ]
})
export class ArkoCrmCallEventsModule { }
