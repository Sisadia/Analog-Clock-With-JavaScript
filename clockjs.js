setInterval(setClock,1000) //ekta interval set kora hoise and prottek 1000ms por por ei function ta call kora hobe.

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')



//function define, ei function ta current date get korbe.
function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60   //second hand ta koto tuk rotate hbe sheta declare kora hoise. const keyword ta define kore j variable ta constant.
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12
  
    //setRotation function ta call kora hoise.
    setRotation(secondHand , secondsRatio)
    setRotation(minuteHand , minutesRatio)
    setRotation(hourHand , hoursRatio)
}


//Set the value for rotation of the hands
function setRotation(element,rotatRatio){
    element.style.setProperty('--rotation',rotatRatio *360) // property method e css e declare kora rotation method ta set kora hoyeche.

}

setClock() //page load newar sathe sathe exact time theke clock start hbe.
