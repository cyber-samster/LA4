export const searchBooks = async (query) => {

  if (!query.trim()) {
    alert("Please enter a search term");
    return [];
  }

  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data); // 🔥 VERY IMPORTANT (check in browser console)

    if (!data.items || data.items.length === 0) {
      alert("No books found");
      return [];
    }

    return data.items.map((item) => ({
      title: item.volumeInfo?.title || "No Title",
      author: item.volumeInfo?.authors?.[0] || "Unknown",
      publisher: item.volumeInfo?.publisher || "N/A",
      year: item.volumeInfo?.publishedDate || "N/A",
      image: item.volumeInfo?.imageLinks?.thumbnail || ""
    }));

  } catch (error) {
    console.error("Error fetching books:", error);
    alert("Error fetching data");
    return [];
  }
};