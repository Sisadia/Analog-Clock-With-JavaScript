setInterval(setClock,1000) //ekta interval set kora hoise and prottek 1000ms por por ei function ta call kora hobe.

//function define, ei function ta current date get korbe.
function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60   //second hand ta koto tuk rotate hbe sheta declare kora hoise. const keyword ta define kore j variable ta constant.
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12
}


//Set the value for rotation of the hands