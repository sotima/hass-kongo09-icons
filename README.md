[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)

# hass-sotima-icons

Custom icon pack designed for Home Assistant for personal use / shamelessly copied from kongo09 https://github.com/kongo09/hass-kongo09-icons

## Content

![Preview](./svg/window-shutter-group.svg) window-shutter-group<br />
![Preview](./svg/window-shutter-group-partly.svg) window-shutter-group-partly<br />
![Preview](./svg/window-shutter-group-open.svg) window-shutter-group-open<br />
![Preview](./svg/window-shutter-partly.svg) window-shutter-partly<br />
![Preview](./svg/window-shutter-clock.svg) window-shutter-clock<br />
![Preview](./svg/window-shutter-cog.svg) window-shutter-cog<br />
![Preview](./svg/chip-ota.svg) chip-ota<br />
![Preview](./svg/radiator-cog.svg) radiator-cog<br />
![Preview](./svg/radiator-clock.svg) radiator-clock<br />
![Preview](./svg/radiator-off-clock.svg) radiator-off-clock<br />
![Preview](./svg/light-tree.svg) light-tree<br />
![Preview](./svg/lightbulb-group-clock.svg) lightbulb-group-clock<br />


## Install

### HACS
Add `https://github.com/sotima/hass-sotima-icons` as custom-repository for a Lovelace plugin in [HACS](https://hacs.xyz/docs/faq/custom_repositories/)

### Manual
Copy the `hass-sotima-icons.js` file into `<config>/www/` where `<config>` is your home-assistant config directory (the directory where your `configuration.yaml` resides).

Add the folowing to the `frontend` section of your `configuration.yaml`

```yaml
frontend:
  extra_module_url:
    - /local/hass-sotima-icons.js
```

Or add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml if using YAML mode.

```yaml
resources:
  - type: js
    url: /local/hass-sotima-icons.js
```

Restart home-assistant.

## Using
The icons use the prefix `sotima:`.

Example:

```
type: entity
entity: cover.livingroom
icon: 'sotima:windows-shutter-partly'
```

## Thanks
Thanks to @kongo09 as I have shamelessly copied his repo.
