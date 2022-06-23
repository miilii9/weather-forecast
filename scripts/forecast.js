const key = "51hnp4DHuWQ5r6yamGIUFXeDnpcM8oO4";
const weather = async (code)=>{
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = response.json();
    return data[0];
}
const cityForm = async (city)=>{
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

// city('machester').then(data=>{
//     return weather(data.Key);
// }).catch(err=>console.log(err));