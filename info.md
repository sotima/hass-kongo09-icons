

## Usage:
Install the plugin and use it like in this example:

```yaml
type: entities
entities:
  - entity: cover.templ_all
    name: All covers
    icon: sotima:window-shutter-group
  - entity: cover.templ_buero
    name: Office
    icon: sotima:window-shutter-partly
  - entity: input_datetime.front_cover_close_time
    name: Close covers at
    icon: sotima:window-shutter-schedule
```

![Example](https://github.com/sotima/hass-sotima-icons/blob/master/content.png)

### Systemwide availability (Optional)
The steps above will make the icons available, but limited to the Lovelace UI only. If you want the icons to be available throughout Home Assistant, add the following to the `frontend` section of your `configuration.yaml`

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/hass-sotima-icons/hass-sotima-icons.js
```

For this step, a system restart is needed.
