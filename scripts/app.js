const form = document.querySelector("form");
const cityName = document.querySelector(".city-name");
const condition = document.querySelector(".condition");
const temp = document.querySelector(".temp");
const features = document.querySelector(".features");
const card = document.querySelector(".card");

const upUi = async data=>{
    const {citName,weathery} = data;
    features.innerHTML=`<div class="features my-3 text-center text-uppercase ">
    <h5 class="text-muted my-4 city-name">${citName.EnglishName}</h5>
    <div class="text-muted my-4 condition">${weathery.WeatherText}</div>
    <div class="text-muted my-4 display-4 temp">
        <span>${weathery.Temperature.Metric.value}</span>
        <span>&deg;c</span>
    </div>

</div>`
}
const upCity = async city=>{
    const citName = await cityForm(city);
    const weathery = await weather(citName.Key);
    return {citName , weathery};
}
form.addEventListener("submit" , e=>{
    e.preventDefault();
    const city = form.city.value.trim();
    form.reset();
    upCity(city).then(data=>{
        return upUi(data);
    });

})