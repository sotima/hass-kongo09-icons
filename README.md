[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)

# hass-pap-icons

Custom icon pack designed for Home Assistant containing icons for Philips Air Purifier.

## Content

![Preview](./svg/power_button.svg) power_button<br />
![Preview](./svg/child_lock_button.svg) child_lock_button<br />
![Preview](./svg/auto_mode_button.svg) auto_mode_button<br />
![Preview](./svg/fan_speed_button.svg) fan_speed_button<br />
![Preview](./svg/humidity_button.svg) humidity_button<br />
![Preview](./svg/light_dimming_button.svg) light_dimming_button<br />
![Preview](./svg/two_in_one_mode_button.svg) two_in_one_mode_button<br />
![Preview](./svg/timer_reset_button.svg) timer_reset_button<br />
![Preview](./svg/sleep_mode.svg) sleep_mode<br />
![Preview](./svg/auto_mode.svg) auto_mode<br />
![Preview](./svg/allergen_mode.svg) allergen_mode<br />
![Preview](./svg/purification_only_mode.svg) purification_only_mode<br />
![Preview](./svg/two_in_one_mode.svg) two_in_one_mode<br />
![Preview](./svg/bacteria_virus_mode.svg) bacteria_virus_mode<br />
![Preview](./svg/filter_replacement.svg) filter_replacement<br />
![Preview](./svg/water_refill.svg) water_refill<br />
![Preview](./svg/prefilter_wick_cleaning.svg) prefilter_wick_cleaning<br />
![Preview](./svg/pm25.svg) pm25<br />
![Preview](./svg/iai.svg) iai<br />
![Preview](./svg/wifi.svg) wifi<br />
![Preview](./svg/reset.svg) reset<br />


## Install

### HACS
Add this repo via HACS as a plugin and install.  See the [HACS install guide](./HACS_INSTALL.md) for step by step instructions.

### Manual
Copy the `hass-pap-icons.js` file into `<config>/www/` where `<config>` is your home-assistant config directory (the directory where your `configuration.yaml` resides).

Add the folowing to the `frontend` section of your `configuration.yaml`

```yaml
frontend:
  extra_module_url:
    - /local/hass-pap-icons.js
```

Or add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml if using YAML mode.

```yaml
resources:
  - type: js
    url: /local/hass-pap-icons.js
```

Restart home-assistant.

## Using
The icons uses the prefix `pap:`.

Example:

```
entities:
  - entity: light.floor_lamp
    icon: 'bha:floor-lamp'
    name: floor-lamp
  - entity: light.floor_lamp_dual
    icon: 'bha:floor-lamp-dual'
    name: floor-lamp-dual
  - entity: light.led_strip
    icon: 'bha:led-strip'
    name: led-strip
  - entity: light.outdoor_lamp_north
    icon: 'bha:outdoor-lamp'
    name: outdoor-lamp
  - entity: light.outdoor_lamp_west
    icon: 'bha:outdoor-lamp-variant'
    name: outdoor-lamp-variant
show_header_toggle: false
title: hass-bha-icons
type: entities
```

## FAQ
Q: The icon ain't showing, it's just white space where it should be. What's up with that?

A: Probably related to cache. Try opening your instance in a incognito/private Window and see if your icon shows then. If yes, it's cache related. If not, spellcheck.

## Thanks
Thanks to @hulkhaugen, as I used his hass-bha-icons based on hass-fontawesome from @thomasloven as a template for this pack
