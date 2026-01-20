const btn = document.getElementById("searchBtn");
const result = document.getElementById("result");
const input = document.getElementById("cityInput");

const API_KEY = "c0aa683376b5f0db7a9cfe6eaec242c2";

btn.addEventListener("click", async () => {
  const city = input.value.trim();

  if (!city) {
    result.innerHTML = "⚠ Please enter a city name";
    return;
  }

  result.innerHTML = "⏳ Loading...";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    const data = await response.json();
    console.log(data); // 👈 keep for testing

    if (data.cod !== 200) {
      result.innerHTML = "❌ City not found";
      return;
    }

    const { temp } = data.main;
    const { description } = data.weather[0];

    localStorage.setItem("lastCity", city);

    result.innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡 Temperature: ${temp}°C</p>
      <p>☁ ${description}</p>
    `;
  } catch (error) {
    console.error(error);
    result.innerHTML = "❌ Something went wrong";
  }
});

// Load last searched city
window.onload = () => {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    input.value = lastCity;
  }
};
