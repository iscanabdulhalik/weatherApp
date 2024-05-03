// // import express from 'express';

// // const app = express();

// // app.use(express.static(__index.html + '/public'));
// // app.use(express.json());




// //     router.get('/', (req, res) => {
// //         res.send("index");
// //     });

// //     app.get('/weather', (req, res) => {
// //         const city = req.query.city;;
// //         try{
// //             const weatherData = await getWeatherData(city);
// //             res.sender(weatherData);
// //         }
// //         catch(error){
// //             res.status(500).send(error);
// //         }
// //     });

//     const PORT = process.env.PORT || 3000;
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });



// import express from "express";
// import fetch from "node-fetch";

// const app = express();
// const router = express.Router();

// router.get('/', getWeatherData); 


// async function getWeatherData(city) {
//     city = req.body.city;  
//     const apiKey = "03dc098cf92cdfd49643c71f7999c372"
//     const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

//     try{

//         const response = await fetch(weatherUrl);
//         const weatherData = await response.json();
//         return weatherData;
//     }
//     catch(error){
//         console.log(error);
//         throw error;
//     }
// }

// getWeatherData("London").then(data => console.log(data));



// app.get("/weather", async (req, res) => {
//   const city = req.query.city;
//   try {
//     const weatherData = await weatherData(city);
//     res.json(weatherData );
//   } catch (error) {
//     res.status(500).send("Error fetching weather data.");
//   }
// });


// const PORT = process.env.PORT || 3002;
// app.listen(PORT, () => {
//   console.log(`Weather app is running on port ${PORT}`);
// });





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
