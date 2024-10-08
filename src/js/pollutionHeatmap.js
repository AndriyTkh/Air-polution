async function loadPollutionData() {
  try {
    let heatData = pollutionData.map(function (row) {
      return [
        parseFloat(row.Latitude),
        parseFloat(row.Longitude),
        parseFloat(row.CO) / 2,
      ]; // normalize CO value
    });

    // Create the heatmap layer using Leaflet.heat
    var heat = L.heatLayer(heatData, {
      radius: 25,
      blur: 15,
      maxZoom: 17,
    }).addTo(map);
  } catch (error) {
    console.error("Error loading pollution data:", error);
  }
}

// Initialize the map and set its view to Kyiv
var map = L.map("map").setView([50.45, 30.523], 12);

// Load and display tile layer (for city layout)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Call the function to load the pollution data and display the heatmap
loadPollutionData();
