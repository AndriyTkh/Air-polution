export async function fetchDatabase() {
  try {
    const response = await fetch("http://localhost:3000/database"); // Replace with your deployed server URL if hosted
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
