export const searchCountries = async (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!Array.isArray(data)) {
    alert("Country not found");
    return [];
  }

  return data.map((c) => ({
    name: c.name.common,
    capital: c.capital?.[0] || "N/A",
    population: c.population,
    region: c.region,
    flag: c.flags?.png
  }));
};