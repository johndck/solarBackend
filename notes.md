Create an API endpoint:

You can create an API endpoint using the app.get() function. This function tells Express to listen for GET requests at a specific path, and defines the function to call when a request is received.

app.get('/api/data', async (req, res) => {
const data = await fetchFromApi(); // fetchFromApi is your function to fetch data from the API
res.json(data);
});
