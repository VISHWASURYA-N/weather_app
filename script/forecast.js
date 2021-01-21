
let key="NvNUlzCGJR21eRNe4WBoqyOJ7qY1ZB9p";
const getCity=async(city)=>{
    let url="http://dataservice.accuweather.com/locations/v1/cities/search";
    let query=`?apikey=${key}&q=${city}`;
    let response=await fetch(url + query);
    let data=await response.json();
    // console.log(data);
    return data[0]

}
const getWeather=async (id)=>{
    let  url="http://dataservice.accuweather.com/currentconditions/v1/";
    let query=`${id}?apikey=${key}`;
    let response =await fetch(url + query);
    let data=await response.json();
    return data [0]

}
getCity("goa").then(data=>{
    getWeather(data.Key)
});