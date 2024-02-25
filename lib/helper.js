let BASE_URL = "http://localhost:3000"; // Default base URL for local development

// Check if the environment is production
if (process.env.NODE_ENV === "production") {
  // Update the base URL for production environment
  BASE_URL = "https://candy-kush.vercel.app"; // Replace this with your actual production URL
}

export async function postOrder(orderData) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    };

    const response = await fetch(BASE_URL + "/api/orders", Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
}
