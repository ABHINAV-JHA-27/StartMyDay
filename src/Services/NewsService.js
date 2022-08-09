
//Function to fetch news from the server

export async function service() {
    const result = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=f11a8f8fdc674f44a6d3b975546f374c').then((response) => (response.json()));
    return result.articles;
}
