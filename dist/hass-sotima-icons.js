const SOTIMA_ICONS_MAP = {
  "window-shutter-partly": "m3 4h18v4h-2v12h-2v-12h-10v12h-2v-12h-2zm5 5h8v2h-8zm0 3h8v2h-8z",
  "window-shutter-group": "m4.9751 12.916h4.1254v0.99996h-4.1254zm0.024914-1.9158h2.9708v0.99996h-2.9708zm7.9751 6.7818h5.5v0.99996h-5.5zm0.024914-1.8574h5.5v0.99996h-5.5zm-1-7.9068v-2.018h-8v9h-1.268v-9h-0.732v-2h12v2h-0.768v2.018zm-4 0.98243v0.99997h-3v-0.99997zm3-0.99121c-1.9829 0.00377-4.1894-0.00934-6-0.00879v-1.0004h6zm11 0.99115v2h-1v8.9779h-1.5v-8.9779h-7.5v8.9779h-1.5v-8.9779h-1v-2m9 3v1h-5.5v-1m0 2h5.5v0.99996h-5.5v-0.99996",
	"window-shutter-group-partly": "m12 8.0176v-2.018h-8v9h-1.268v-9h-0.732v-2h12v2h-0.768v2.018zm-4 0.98243v0.99997h-3v-0.99997zm3-0.99121c-1.9829 0.00377-4.1894-0.00934-6-0.00879v-1.0004h6zm11 0.99115v2h-1v8.9779h-1.5v-8.9779h-7.5v8.9779h-1.5v-8.9779h-1v-2m9 3v1h-5.5v-1m0 2h5.5v0.99996h-5.5v-0.99996",
	"window-shutter-group-open": "m12 8.0176v-2.018h-8v9h-1.268v-9h-0.732v-2h12v2h-0.768v2.018zm-1-0.00879c-1.9829 0.0037712-4.1894-0.0093336-6-0.008783v-1.0004h6zm11 0.96912v2h-1v9h-1.5v-9h-7.5v9h-1.5v-9h-1v-2m2.5089 3h6.4911v1.0221h-5.5v-1.0221",
	"window-shutter-schedule": "m16.485 11.02s-0.0786 0 0 0c-3.0643 0.0785-5.5 2.5142-5.5 5.5 0 3.0642 2.4357 5.5 5.5 5.5s5.5-2.4358 5.5-5.5c0-3.0643-2.4357-5.5-5.5-5.5m0 9.4285c-2.2 0-3.9286-1.7285-3.9286-3.9285s1.7286-3.9286 3.9286-3.9286 3.9286 1.7286 3.9286 3.9286-1.7286 3.9285-3.9286 3.9285m-0.7857-7.0714v3.9286l2.8286 1.7285 0.6285-0.9428-2.2785-1.3357v-3.3786zm1.3007-3.3581v-2.019h-10v12h-2v-12h-2v-4h18v4h-2v2.499c-0.624-0.26-1.296-0.426-2-0.48zm-6.826 7.981c0.171 0.72 0.461 1.395 0.849 2h-3.023v-2zm0-3c-0.114 0.482-0.174 0.984-0.174 1.5 0 0.168 6e-3 0.335 0.019 0.5h-2.019v-2zm1.637-3c-0.552 0.576-1 1.252-1.312 2h-2.499v-2zm4.189-1.981c-1.084 0.083-2.094 0.431-2.964 0.981h-5.036v-2h8z",
	"chip-ota": "m8.923 12.75c2.171-1e-3 4.174-0.731 5.778-1.954l1.157 1.559-5e-3 4e-3 5e-3 6e-3c-1.932 1.467-4.332 2.336-6.929 2.335h-0.013c-2.598 1e-3 -4.997-0.8679-6.929-2.335l4e-3 -6e-3 -4e-3 -4e-3 1.157-1.5589c1.604 1.223 3.607 1.9529 5.777 1.954zm2.082-4.288c0.501-0.195 0.967-0.458 1.389-0.779l1.155 1.561c-1.292 0.97995-2.891 1.558-4.625 1.556h-3e-3c-1.734 0.0021-3.333-0.576-4.625-1.556l1.155-1.561c0.421 0.321 0.888 0.584 1.389 0.779l0.011-0.01c0.64 0.252 1.318 0.387 2.005 0.398h0.038 0.028 0.033c0.719-5e-3 1.407-0.148 2.039-0.398zm-2.083-5.452 7e-3 -0.01 2.31 3.122c-0.643 0.487-1.446 0.779-2.313 0.778h-7e-3c-0.867 1e-3 -1.67-0.291-2.313-0.778l2.31-3.122zm5.078 4.49h6v1.175h1.969v1h-1.969v2h1.969v1h-1.969v2h1.969v1h-1.969v2h1.969v1h-1.969v0.9781h-10v-0.9781h-2.031v-1h2.031v-2c2.578 0.054 6.275-1.377 7.716-3.3159zm0 8.403v2.25h0.969v-2.25zm2 0v2.25h1v-2.25zm2 0v2.25h1v-2.25z"
};

// assume modern style
// Iconset API (Home Assistant 0.110 and up):
async function getIcon(name) {
  return { path: SOTIMA_ICONS_MAP[name] };
}

let sotima_icons_mode = 'modern';
window.customIconsets = window.customIconsets || {};
window.customIconsets["sotima"] = getIcon;

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
  window.customIcons["sotima"] = { getIcon, getIconList };
}

console.info(
  `%c HASS-SOTIMA-ICONS         \n%c Version 1.51 [` + sotima_icons_mode + `] `,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
