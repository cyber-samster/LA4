export const getWeather = async (city) => {

  if (!city || city.trim() === "") {
    alert("Please enter a city name");
    return null;
  }

  try {
    const apiKey = "b7b72c2ab7dd7ce1635e84d46820fae1";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    console.log("FULL API RESPONSE:", data); // 🔥 DEBUG

    if (data.cod !== 200) {
      alert(data.message || "Invalid API / City / Request");
      return null;
    }

    return {
      city: data.name,
      temp: data.main?.temp,
      humidity: data.main?.humidity,
      condition: data.weather?.[0]?.main,
      icon: `https://openweathermap.org/img/wn/${data.weather?.[0]?.icon}.png`
    };

  } catch (error) {
    console.error("ERROR:", error);
    alert("Error fetching weather");
    return null;
  }
};