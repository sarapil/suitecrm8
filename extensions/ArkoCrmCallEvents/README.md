# ArkoCRM Call Events

This extension provides a screen pop-up for incoming calls.

## Features

- A Server-Sent Events (SSE) endpoint at `/arkocrm/call-events/stream` that pushes call events.
- A front-end banner that subscribes to the SSE endpoint and displays caller information.
- The banner provides a button to "Open caller record" if the caller's number is found in Leads or Contacts.
- If the caller's number is not found, the banner provides a button to "Create new Lead".

## Configuration

To enable or disable this feature, you can modify the `config/services/system/settings.yaml` file.

```yaml
parameters:
  system.settings:
    arkocrm.call_events.enabled:
        value: true # or false
        type: bool
```

After changing the setting, you may need to clear the cache for the changes to take effect.
