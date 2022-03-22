const SOTIMA_ICONS_MAP = {
  "window-shutter-partly": [0, 0, 24, 24, "m3 4h18v4h-2v12h-2v-12h-10v12h-2v-12h-2zm5 5h8v2h-8zm0 3h8v2h-8z"],
  "window-shutter-group": [0, 0, 24, 24, "m13.018 8v-2.018h-8v9h-1v-9h-1v-2h12v2h-1v2.018zm-4.018 4.982v2h-2.982v-2zm-1-3v2h-1.982v-2zm4.018-1.982h-4.018v0.982h-1.982v-2h6zm-3.0091 1h12v2h-1v9h-1v-9h-8v9h-1v-9h-1v-2m3 3h6v2h-6v-2m0 3h6v2h-6v-2m0 3h6v2h-6v-2"],
	"window-shutter-group-partly": [0, 0, 24, 24, "m13.018 8v-2.018h-8v9h-1v-9h-1v-2h12v2h-1v2.018zm-5.018 1v2h-1.982v-2zm4.018-1h-6v-1.018h6zm-3.0091 1h12v2h-1v9h-1v-9h-8v9h-1v-9h-1v-2m3 3h6v1h-6v-1m0 2h6v2h-6v-2"],
	"window-shutter-group-open": [0, 0, 24, 24, "m13.018 8v-2.018h-8v9h-1v-9h-1v-2h12v2h-1v2.018zm-1 0h-6v-1.018h6zm-3.0091 1h12v2h-1v9h-1v-9h-8v9h-1v-9h-1v-2m3 3h6v1h-6v-1"],
	"window-shutter-schedule": [0, 0, 24, 24, "m16.485 11.02s-0.0786 0 0 0c-3.0643 0.0785-5.5 2.5142-5.5 5.5 0 3.0642 2.4357 5.5 5.5 5.5s5.5-2.4358 5.5-5.5c0-3.0643-2.4357-5.5-5.5-5.5m0 9.4285c-2.2 0-3.9286-1.7285-3.9286-3.9285s1.7286-3.9286 3.9286-3.9286 3.9286 1.7286 3.9286 3.9286-1.7286 3.9285-3.9286 3.9285m-0.7857-7.0714v3.9286l2.8286 1.7285 0.6285-0.9428-2.2785-1.3357v-3.3786zm1.3007-3.3581v-2.019h-10v12h-2v-12h-2v-4h18v4h-2v2.499c-0.624-0.26-1.296-0.426-2-0.48zm-6.826 7.981c0.171 0.72 0.461 1.395 0.849 2h-3.023v-2zm0-3c-0.114 0.482-0.174 0.984-0.174 1.5 0 0.168 6e-3 0.335 0.019 0.5h-2.019v-2zm1.637-3c-0.552 0.576-1 1.252-1.312 2h-2.499v-2zm4.189-1.981c-1.084 0.083-2.094 0.431-2.964 0.981h-5.036v-2h8z"],
	"chip-ota": [0, 0, 24, 24, "m8.923 12.75c2.171-1e-3 4.174-0.731 5.778-1.954l1.157 1.559-5e-3 4e-3 5e-3 6e-3c-1.932 1.467-4.332 2.336-6.929 2.335h-0.013c-2.598 1e-3 -4.997-0.8679-6.929-2.335l4e-3 -6e-3 -4e-3 -4e-3 1.157-1.5589c1.604 1.223 3.607 1.9529 5.777 1.954zm2.082-4.288c0.501-0.195 0.967-0.458 1.389-0.779l1.155 1.561c-1.292 0.97995-2.891 1.558-4.625 1.556h-3e-3c-1.734 0.0021-3.333-0.576-4.625-1.556l1.155-1.561c0.421 0.321 0.888 0.584 1.389 0.779l0.011-0.01c0.64 0.252 1.318 0.387 2.005 0.398h0.038 0.028 0.033c0.719-5e-3 1.407-0.148 2.039-0.398zm-2.083-5.452 7e-3 -0.01 2.31 3.122c-0.643 0.487-1.446 0.779-2.313 0.778h-7e-3c-0.867 1e-3 -1.67-0.291-2.313-0.778l2.31-3.122zm5.078 4.49h6v1.175h1.969v1h-1.969v2h1.969v1h-1.969v2h1.969v1h-1.969v2h1.969v1h-1.969v0.9781h-10v-0.9781h-2.031v-1h2.031v-2c2.578 0.054 6.275-1.377 7.716-3.3159zm0 8.403v2.25h0.969v-2.25zm2 0v2.25h1v-2.25zm2 0v2.25h1v-2.25z"]
};

// assume modern style
// Iconset API (Home Assistant 0.110 and up):
async function getIcon(name) {
  return { path: SOTIMA_ICONS_MAP[name] };
}

let sotima_icons_mode = 'modern';
window.customIconsets = window.customIconsets || {};
window.customIconsets["custom"] = getIcon;

// prepare for picker style
async function getIconList() {
  return Object.keys(SOTIMA_ICONS_MAP).map(icon => ({name: icon}));
}

if (!window.frontendVersion || window.frontendVersion < 20200519.0) {
  // ha-iconset-svg (Up to Home Assistant 0.109):
  const iconset = document.createElement("ha-iconset-svg");
  iconset.name = "sotima";
  iconset.size = "24";

  let iconsetHTML = "";
  for (let key in SOTIMA_ICONS_MAP) {
    iconsetHTML += `<g id="${key}"><path d="${SOTIMA_ICONS_MAP[key]}" /></g>`;
  }

  iconset.innerHTML = `<svg><defs>${iconsetHTML}</defs></svg>`;
  document.body.appendChild(iconset);

  sotima_icons_mode = 'legacy';
} else if(window.frontendVersion > 20211027.0) {
  // new enough to support getIcon and getIconlist
  sotima_icons_mode = 'picker';
  window.customIcons["kongo09"] = { getIcon, getIconList };
}

console.info(
  `%c HASS-KONGO09-ICONS         \n%c Version 1.3 [` + sotima_icons_mode + `] `,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
