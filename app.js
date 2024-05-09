import express from "express"
import fetch from "node-fetch";

 
const app = express();
const router = express.Router();

async function getWeatherData(city) {
    const apiKey = "03dc098cf92cdfd49643c71f7999c372";
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(weatherUrl);
        const weatherData = await response.json();
        return weatherData;
    } catch(error) {
        console.error(error);
        throw error;
    }
}

router.post('/weather', async (req, res) => {
    const city = req.body.city;
    try {
        const weatherData = await getWeatherData(city);
        res.json(weatherData);
    } catch (error) {
        res.status(500).send("Error fetching weather data.");
    }
});

app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Weather app is running on port ${PORT}`);
});
