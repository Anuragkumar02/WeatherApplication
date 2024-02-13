const contentbox=document.getElementById('contentbox');

contentbox1.style.display="none"
contentbox.style.display="none";
const searchcity = document.getElementById('searchcity');

searchcity.addEventListener('keypress', (event) => {
     if (event.keyCode == 13) {
        getweather(searchcity.value);   
     }
    
})


const getweather = async (val) => {
    try {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=225cf6c57d680f9408b83720b39159c2&units=metric`)
        const realdata = await data.json(); 
        console.log(realdata);       
         if(data.status=="404")
         {
            
            contentbox1.style.display="block"
            contentbox.style.display="none";
           
         }
          else {
            weather(realdata);
            contentbox.style.display="block";
            contentbox1.style.display="none";
            getdate();
           
          }
              
    } catch (error) {
       console.log(error);
    }

}
const weather = (realdata) => {
    let cityname = document.getElementById('cityname');
    let temp = document.getElementById('temp');
    let mintemp = document.getElementById('mintemp');
    cityname.innerHTML = `${realdata.name},${realdata.sys.country}`
    temp.innerHTML = `${Math.round(realdata.main.temp)}&deg;C`;
    mintemp.innerHTML = `${Math.floor(realdata.main.temp_min)}&deg;C(min)/${Math.ceil(realdata.main.temp_max)}&deg;C(max)`
    let weathertype = document.getElementById('type');
    weathertype.innerText = `${realdata.weather[0].main}`;
    

    if (realdata.weather[0].main == 'Haze'||realdata.weather[0].main == 'Mist') {
        document.body.style.background="url(mist.jpeg) no-repeat center center/cover";
    }

   else if( realdata.weather[0].main == 'Rain'||realdata.weather[0].main=='Drizzle') {
        document.body.style.background="url(rainy2.jpeg) no-repeat center center/cover";
    }

   else if( realdata.weather[0].main == 'Snow') {
        document.body.style.background="url(snow.jpeg) no-repeat center center/cover";
    }
  
    else if( realdata.weather[0].main == 'Clear') {
        document.body.style.background="url(sunny2.jpeg) no-repeat center center/cover";
    }
    else if( realdata.weather[0].main == 'Clouds') {
        document.body.style.background="url(claudy.jpeg) no-repeat center center/cover";
    }


}
const getdate = () => {
    let newdate = new Date();
    let days = ["sunday", "Monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    let day = days[newdate.getDay()];
    let month = months[newdate.getMonth()];
    let year = newdate.getFullYear();
    let date = newdate.getDate();


    let dateid = document.getElementById('dateid');
    dateid.innerHTML = `${date} ${month}(${day}),${year}`;
    

}


