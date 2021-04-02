

## Usage:
Install the plugin and use it like in this example:

```yaml
title: My Card
type: light
entity: light.xmas_star
icon: kongo09:xmas_star
```

![Example](https://github.com/kongo09/hass-kongo09-icons/blob/master/content.png)

### Systemwide availability (Optional)
The steps above will make the icons available, but limited to the Lovelace UI only. If you want the icons to be available throughout Home Assistant, add the following to the `frontend` section of your `configuration.yaml`

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/hass-kongo09-icons/hass-kongo09-icons.js
```

For this step, a system restart is needed.
