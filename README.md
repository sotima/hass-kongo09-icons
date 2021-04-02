[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)

# hass-kongo09-icons

Custom icon pack designed for Home Assistant for personal use

## Content

![Preview](./svg/power_button.svg) power_button<br />



## Install

### HACS
Add `https://github.com/kongo09/hass-kongo09-icons` as custom-repository for a Lovelace plugin in [HACS](https://hacs.xyz/docs/faq/custom_repositories/)

### Manual
Copy the `hass-kongo09-icons.js` file into `<config>/www/` where `<config>` is your home-assistant config directory (the directory where your `configuration.yaml` resides).

Add the folowing to the `frontend` section of your `configuration.yaml`

```yaml
frontend:
  extra_module_url:
    - /local/hass-kongo09-icons.js
```

Or add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml if using YAML mode.

```yaml
resources:
  - type: js
    url: /local/hass-kongo09-icons.js
```

Restart home-assistant.

## Using
The icons uses the prefix `kongo09:`.

Example:

```
type: entity
entity: fan.air_ac2729
icon: 'kongo09:power_button'
```

## Thanks
Thanks to @hulkhaugen, as I used his hass-bha-icons based on hass-fontawesome from @thomasloven as a template for this pack
