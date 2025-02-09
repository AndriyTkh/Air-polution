export async function fetchDatabase() {
  try {
    const response = await fetch("https://adam-air-server.onrender.com/database"); // Replace with your deployed server URL if hosted
    const data = await response.json();

    if (response.ok) {
      console.log("✅ Data received:", data.data);
      return data.data;
    } else {
      console.error("❌ Error:", data.error);
    }
  } catch (error) {
    console.error("❌ Failed to fetch database file:", error);
  }
}
