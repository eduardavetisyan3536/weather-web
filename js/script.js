function weatherApp ()  {
    let flex = document.querySelector('.box-weather')
    let inputVal = document.querySelector('.inp').value
    const apiKey = "4d8fb5b93d4af21d66a2948710284366"
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`
    let fetchh = fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {

            }
        }).then(response => {
            let pogoda = response.weather[0].main
            console.log(pogoda);
            if(pogoda === 'Clouds'){
                pogoda = `<i class="fa-solid fa-cloud"></i>`
            }else if(pogoda === 'Clear'){
                pogoda = `<i class="fa-solid fa-sun"></i>`
                
            }else if(pogoda === 'Rain'){
                pogoda = `<i class="fa-solid fa-cloud-showers-heavy"></i>`
                
            }
            flex.innerHTML = `
            <div class="Weather-box">
                <div class="top">
                    <p> <i class="fa-solid fa-wind"></i> ${Math.round(response.wind.speed * 2.23694)} mph</p>
                    <p> <i class="fa-brands fa-drupal"></i> ${response.main.humidity} %</p>
                </div>
                <div class="atributes">
                    <p class="celsius">${response.main.temp.toFixed(0)}°C</p>
                    <p>${response.name}</p>
                    <p>${response.weather[0].main}</p>
                    <p>${pogoda}</p>
                </div>
            </div>`
            
            
        })
    
    
}
let submit = document.querySelector('.submit')
submit.addEventListener('click', weatherApp)