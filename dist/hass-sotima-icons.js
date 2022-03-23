const SOTIMA_ICONS_MAP = {
  "window-shutter-partly": "m3 4h18v4h-2v12h-2v-12h-10v12h-2v-12h-2zm5 5h8v2h-8zm0 3h8v2h-8z",
  "window-shutter-group": "m5.9875 12.916h3.0125v0.99996h-3.0125zm0.024914-1.9158h1.9729v0.99996h-1.9729zm6.9627 6.7818h5.0124v0.99996h-5.0124zm0.02491-1.8574h5.0124v0.99996h-5.0124zm-1-7.9068v-2.018h-7v9h-2v-9h-0.99998v-2h13v2h-1v2.018zm-3.9854 0.98243v0.99997h-2.0021v-0.99997zm2.9854-0.99121-5-0.00879v-1.0004h5zm11 0.99115v2h-1v8.9779h-2v-8.9779h-7v8.9779h-2v-8.9779h-1v-2m9.0125 3v1h-5.0124v-1m0 2h5.0124v0.99996h-5.0124v-0.99996",
	"window-shutter-group-partly": "m12 8.0178v-2.018h-7v9h-2v-9h-0.99998v-2h13v2h-1v2.018zm-3.9854 0.98243v0.99997h-2.0021v-0.99997zm2.9854-0.99121-5-0.00879v-1.0004h5zm11 0.99115v2h-1v8.9779h-2v-8.9779h-7v8.9779h-2v-8.9779h-1v-2m9.0125 3v1h-5.0124v-1m0 2h5.0124v0.99996h-5.0124v-0.99996",
	"window-shutter-group-open": "m12 8.0178v-2.018h-7v9h-2v-9h-0.99998v-2h13v2h-1v2.018zm-1-0.00878-5-0.00879v-1.0004h5zm11 0.99115v2h-1v8.9779h-2v-8.9779h-7v8.9779h-2v-8.9779h-1v-2m9.0125 3v1h-5.0124v-1",
	"window-shutter-schedule": "m16.485 11.02s-0.0786 0 0 0c-3.0643 0.0785-5.5 2.5142-5.5 5.5 0 3.0642 2.4357 5.5 5.5 5.5s5.5-2.4358 5.5-5.5c0-3.0643-2.4357-5.5-5.5-5.5m0 9.4285c-2.2 0-3.9286-1.7285-3.9286-3.9285s1.7286-3.9286 3.9286-3.9286 3.9286 1.7286 3.9286 3.9286-1.7286 3.9285-3.9286 3.9285m-0.7857-7.0714v3.9286l2.8286 1.7285 0.6285-0.9428-2.2785-1.3357v-3.3786zm1.3007-3.3581v-2.019h-10v12h-2v-12h-2v-4h18v4h-2v2.499c-0.624-0.26-1.296-0.426-2-0.48zm-6.826 7.981c0.171 0.72 0.461 1.395 0.849 2h-3.023v-2zm0-3c-0.114 0.482-0.174 0.984-0.174 1.5 0 0.168 6e-3 0.335 0.019 0.5h-2.019v-2zm1.637-3c-0.552 0.576-1 1.252-1.312 2h-2.499v-2zm4.189-1.981c-1.084 0.083-2.094 0.431-2.964 0.981h-5.036v-2h8z",
	"window-shutter-cog": "m21.7 18.6v-1l1.1-0.8c0.1-0.1 0.2-0.2 0.1-0.3l-1-1.7c0-0.1-0.2-0.1-0.3-0.1l-1.2 0.5c-0.3-0.2-0.6-0.4-0.9-0.5l-0.2-1.3c0-0.1-0.1-0.2-0.2-0.2h-2c-0.2 0-0.3 0.1-0.3 0.2l-0.2 1.3c-0.3 0.2-0.5 0.3-0.8 0.5l-1.2-0.5c-0.1 0-0.2 0-0.3 0.1l-1 1.7c0 0.1 0 0.2 0.1 0.3l1.1 0.8v1l-1.1 0.8c-0.1 0.1-0.2 0.2-0.1 0.3l1 1.7c0.1 0.1 0.2 0.1 0.3 0.1l1.2-0.5c0.2 0.2 0.5 0.4 0.8 0.5l0.2 1.3c0.1 0.1 0.2 0.2 0.3 0.2h2c0.1 0 0.2-0.1 0.2-0.2l0.2-1.3c0.3-0.2 0.5-0.3 0.8-0.5l1.2 0.4c0.1 0 0.2 0 0.3-0.1l1-1.7c0.1-0.1 0.1-0.2 0-0.2l-1.1-0.8m-3.7 0.9c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5m-10-10.5h8v2h-8v-2m9-1h-10v12h-2v-12h-2v-4h18v4h-2v3.1c-0.3 0-0.7-0.1-1-0.1s-0.7 0-1 0.1v-3.1m-5.7 12h-3.3v-2h3c0 0.7 0.1 1.4 0.3 2m-3.3-8h6.4c-0.8 0.5-1.6 1.2-2.1 2h-4.3v-2m0 3h3.7c-0.3 0.6-0.5 1.3-0.6 2h-3.1v-2z",
	"chip-ota": "m22 13c-0.55228 0-1-0.44772-1-1s0.44772-1 1-1zm0 1c-1.1046 0-2-0.89543-2-2s0.89543-2 2-2zm-16-10v3h-1v1.6309c3.96 1.28 7.0891 4.4091 8.3691 8.3691h0.63086v3h2v-3h2v3h2v-3h2v-10h-2v-3h-2v3h-2v-3h-2v3h-2v-3h-2v3h-2v-3zm-5 6v2c4.9706 0 9 4.0294 9 9h2c0-6.08-4.93-11-11-11zm0 4v2c2.7614 0 5 2.2386 5 5h2c0-3.866-3.134-7-7-7zm0 4v3h3c0-1.6569-1.3431-3-3-3z",
	"light-tree": "m5.3324 18.409h-3.1174v-1.0391h3.1174c0.28576 0 0.51957 0.23381 0.51957 0.51957s-0.23381 0.51957-0.51957 0.51957m4.5306 2.0263-3.133-7.7-0.9664 0.39487 0.19744 0.478-2.4939 2.1406 0.44683 1.1015h1.4184c0.57152 0 1.0391 0.46761 1.0391 1.0391s-0.46761 1.0391-1.0391 1.0391h-0.57152l0.66505 1.6314 3.2837-0.21302 0.19224 0.478 0.9612-0.38968m2.125-0.61828-1.2002-0.49878 0.39487-0.9612 1.2002 0.49878-0.39487 0.9612m-1.0547-3.7825-0.40526-0.9612 1.4496-0.5975 0.39487 0.9612-1.4392 0.5975m-1.8652-2.7849-0.9612-0.39487 0.49878-1.2002 0.9612 0.40007zm6.6054 2.3104v-2.9718c-0.32787 0.11859-0.67667 0.18138-1.0464 0.18138-1.744 0-3.1392-1.3952-3.1392-3.1392 0-0.88594 0.3488-1.6812 0.94873-2.2532-0.16045-0.3767-0.25113-0.79526-0.25113-1.2347 0-1.744 1.3952-3.1392 3.1392-3.1392 1.0882 0 2.0509 0.55808 2.616 1.3952h0.1744a3.8368 3.8368 0 0 1 3.8368 3.8368 3.8368 3.8368 0 0 1-3.8368 3.8368c-0.3488 0-0.69759-0.04883-1.0464-0.1465v3.6345z"
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
  `%c HASS-SOTIMA-ICONS         \n%c Version 1.54 [` + sotima_icons_mode + `] `,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
