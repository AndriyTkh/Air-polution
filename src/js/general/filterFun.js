export function ClearMap(map) {
  map.eachLayer((layer) => {
    if (layer.options.attribution !== "&copy; OpenStreetMap contributors") {
      layer.remove();
    }
  });
}

export function AddHeatMap(heatData, map) {
  var heat = L.heatLayer(heatData, {
    radius: 15,
    blur: 5,
    maxZoom: 1 / map._zoom,
    max: 2,
    gradient: { 0.4: "lime", 0.65: "yellow", 1: "red" },
  }).addTo(map);
}

export const asyncTimeout = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
