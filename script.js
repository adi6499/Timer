let hour, minute, second, set, result, time
let interval
set = document.getElementById('set')
hour = document.querySelector("#hour")
minute = document.querySelector("#minute")
second = document.querySelector("#second")
result = document.querySelector(".result")
time = document.querySelector(".time")
set.addEventListener("click", countdown)

function countdown(event) {

    let hourDown = hour.value
    let minuteDown = minute.value
    let secondDown = second.value

    hour.value=""
    minute.value=""
    second.value=""
    if (event.target.textContent == 'SetTime') {
        set.innerHTML = "Close"
        time.style.visibility = "hidden"
        result.style.visibility = "visible"
    } else if (event.target.textContent == "Close") {
        result.style.visibility = "hidden"
        set.innerHTML = "SetTime"
        time.style.visibility = "visible"
        clearInterval(interval)
        hourDown = 0
        minuteDown = 0
        secondDown = 0
    }
   var interval = setInterval(() => {



        if (secondDown < 0) {
            minuteDown--
            secondDown = 60
            if (minuteDown < 0) {
                hourDown--
                minuteDown = 59
                if (hourDown < 0) {
                    hourDown = 0
                    minuteDown = 0
                    secondDown = 0

                   
                    clearInterval(interval)
                    notify()
                }

            }

        }
        result.innerHTML = `The Times Starts now<br>  
        Hour: ${hourDown} <br>
        Minute:${minuteDown}  <br>
        Second:${secondDown}`

        secondDown--
    }, 1000)

}
function notify() {


    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    } else if(Notification.permission=="granted"){
        const options = {
            body: 'Well Time Is Over',
            dir: 'rtl',
            image: 'https://media.istockphoto.com/vectors/big-smile-emoticon-vector-id150537878?k=20&m=150537878&s=612x612&w=0&h=voQVbkEC2B1kxunjgjj7-npFtyyBIoA14P-6iFAJMes='
        };
        const notification = new Notification('Fuuu', options);
        window.navigator.vibrate(300)

    }else{
        alert("please turn on notification")
    }
}