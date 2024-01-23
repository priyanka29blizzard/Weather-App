

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")

async function fetchData(target){
try{
    let url = `https://api.weatherapi.com/v1/current.json?key=f1ccf4de0fcf4ca8972114817230911&q=${target}&aqi=no`
     
    const response = await fetch(url);

  
     const data =  await response.json();
  

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity +"%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";
    document.querySelector(".weather-icon").src = data.current.condition.icon;

    document.querySelector(".weather").style.display = "block";
}
catch(error){
  alert("Invalid City Name");
  // docoment.querySelector(".weather").style.display = "none";

}

}

// searchBtn.addEventListener("click", ()=>{
    //  let target = searchBox.value;
    // fetchData(target);

    // Throttling Function
    const throttleFunction = (func, delay) => {
 
      // Previously called time of the function
      let prev = 0;
      return (...args) => {
          // Current called time of the function
          let now = new Date().getTime();

          // Logging the difference
          // between previously 
          // called and current called timings
          console.log(now - prev, delay);

          // If difference is greater
          // than delay call
          // the function again.
          if (now - prev > delay) {
              prev = now;

              // "..." is the spread
              // operator here 
              // returning the function with the 
              // array of arguments
              return func(...args);
          }
      }
  }
  searchBtn.addEventListener("click",
      throttleFunction(() => {
        let target = searchBox.value;
     fetchData(target);

    console.log("button is clicked")
      }, 1500));
    

// }
