const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minut');
const seconds = document.querySelector('.second');
const time = function(){
    const currentTime = new Date();
    let hour = currentTime.getHours()
    hours.textContent = hour;
    let minut = currentTime.getMinutes();
    minutes.textContent = minut
    var second = currentTime.getSeconds();
    seconds.textContent = second
}
time();

setInterval(() =>{
    time()
},1000)
