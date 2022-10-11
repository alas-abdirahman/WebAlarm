//Main Page or Alarm Page Scripts
sound1 = new Audio('cock.mp3')   //   importing cock sound
sound2 = new Audio('sound.mp3')  //   importing alarm sound

setInterval(update_time, 1000)     //call update_time function every 1 second.
//Functions That gets the current date and time
function update_time(){
    time = new Date()                 // getting the current date and time
    hour = time.getHours()            // getting the current hour
    minute = time.getMinutes()        // getting the current minutes
    second = time.getSeconds()        // getting the current seconds
    if(hour < 10){
        hour = '0'+time.getHours()
    }
    if(minute < 10){
        minute = '0'+time.getMinutes()
    }
    if(second < 10){
        second = '0'+time.getSeconds()
    }
    document.getElementById('time-span').innerHTML = hour+' : '+minute+' : '+second
}

//Functions that changes the screen background image into night image
function night_mode(){
    document.body.style = "background-image: url('night.png')"
    document.querySelector('button').innerText = 'day mode'
    document.querySelector('button').onclick = day_mode
}

//Functions that changes the screen background image into day image
function day_mode(){
    document.body.style = "background-image: url('day.jpg')"
    document.querySelector('button').innerText = 'night mode'
    document.querySelector('button').onclick = night_mode
}

// Function that increments the hour that prompt the user
function hourPlus(){
    hour = document.getElementById('hour').innerHTML
    newHour = parseInt(hour) + 1
    if(newHour < 10){
        document.getElementById('hour').innerHTML = '0'+newHour
    }
    else if(newHour <= 23){
        document.getElementById('hour').innerHTML = newHour
    }
    else{
        document.getElementById('hour').innerHTML = '0'+0
    }
}

// function that decreases the hour that prompt the user
function hourMinus(){
    hour = document.getElementById('hour').innerHTML
    newHour = parseInt(hour) - 1
    if(newHour <= 0){
        document.getElementById('hour').innerHTML = 23
    }
    else if(newHour < 10){
        document.getElementById('hour').innerHTML = '0'+newHour
    }
    else{
        document.getElementById('hour').innerHTML = newHour
    }
}

// function that increases the minutes that prompt the user
function minutePlus(){
    minute = document.getElementById('minute').innerHTML
    newMinute = parseInt(minute) + 1
    if(newMinute < 10){
        document.getElementById('minute').innerHTML = '0'+newMinute
    }
    else if(newMinute <= 60){
        document.getElementById('minute').innerHTML = newMinute
    }
    else{
        document.getElementById('minute').innerHTML = '0'+0
    }
}

// function that decreases the minutes that prompt the user
function minuteMinus(){
    minute = document.getElementById('minute').innerHTML
    newMinute = parseInt(minute) - 1
    if(newMinute <= 0){
        document.getElementById('minute').innerHTML = 60
    }
    else if(newMinute < 10){
        document.getElementById('minute').innerHTML = '0'+newMinute
    }
    else{
        document.getElementById('minute').innerHTML = newMinute
    }
}

// function that changes the sound
function nextSound(){
    document.getElementsByClassName('sound-image')[0].src = 'clock.jpg'
    document.getElementById('sound-title').innerText = 'CLASSIC CLOCK'
    document.getElementById('nextButton').onclick = prevSound
    document.getElementById('prevButton').onclick = prevSound
}

// funtion that getting back the previous sound
function prevSound(){
    document.getElementsByClassName('sound-image')[0].src = 'cock.jpg'
    document.getElementById('sound-title').innerText = 'COCKEREL'
    document.getElementById('prevButton').onclick = nextSound
    document.getElementById('nextButton').onclick = nextSound
}

// function that play the sound
function playSound(){
    title =  document.getElementById('sound-title').innerText
    if(title == 'COCKEREL'){
        setInterval(sound, 500)
        function sound(){
            if(document.getElementById('soundButton').innerText != '>|' & title == 'COCKEREL'){
                sound1.play()
            }
        }
    }
    else if(title == 'CLASSIC CLOCK'){
        setInterval(sound, 500)
        function sound(){
            if(document.getElementById('soundButton').innerText != '>|' & title == 'CLASSIC CLOCK'){
                sound2.play()
            }
        }
    }
    document.getElementById('soundButton').innerText = '||'
    document.getElementById('soundButton').onclick = pauseSound
}

//function that stops the playing sound
function pauseSound(){
    title =  document.getElementById('sound-title').innerText
    if(title == 'COCKEREL'){
        sound1.pause()
    }
    else if(title == 'CLASSIC CLOCK'){
        sound2.pause()
    }
    document.getElementById('soundButton').innerText = '>|'
    document.getElementById('soundButton').onclick = playSound
}

// function that setting the user's prompts to wake up
function setAlarm(){
    document.body.style = "background-image: url('night.png')"
    document.getElementById('alarmPara').innerText = 'Alarm is set!'
    document.getElementById('setAlarm').innerText = 'CANCEL'
    document.getElementById('soundButton').onclick = ' '
    document.querySelector('button').onclick = ' '
    document.getElementById('prevButton').onclick = ' '
    document.getElementById('nextButton').onclick = ' '
    document.getElementById('hour-plus').onclick = ' '
    document.getElementById('hour-minus').onclick = ' '
    document.getElementById('minute-plus').onclick = ' '
    document.getElementById('minute-minus').onclick = ' '
    document.getElementById('setAlarm').onclick = cancelAlarm

    setInterval(timeEqual, 1000)
    //function that checks if the user time is equal to the current time to do action
    function timeEqual(){
        currentTime = new Date()
        currentHour = currentTime.getHours()
        currentMinute = currentTime.getMinutes()
        userHour = document.getElementById('hour').innerHTML
        userMin = document.getElementById('minute').innerHTML
        if(userHour == currentHour & userMin == currentMinute){
            if(document.getElementById('setAlarm').innerText != 'SET ALARM'){
                playSound()
                document.getElementById('setAlarm').innerText = 'STOP'
                document.getElementById('or').innerText = 'OR'
                if(document.getElementById('alarmPara').innerText != 'WAKE UP!'){
                    but = document.createElement('button')
                    but.style="font-size: 20px; height: 60px; width: 280px; margin-right: 400px;\
                    background-color: red;color: white; border-radius: 8px;"
                    but.id = 'snooze'
                    but.onclick = snooze
                    textnode = document.createTextNode("SNOOZE 10 MINUTES");
                    but.appendChild(textnode)
                    document.getElementsByClassName('buttons-container')[0].appendChild(but)
                }
                document.getElementById('alarmPara').innerText = 'WAKE UP!'

            }
        }
        else if(userMin == currentMinute){
            if(document.getElementById('setAlarm').innerText != 'SET ALARM'){
                playSound()
                document.getElementById('setAlarm').innerText = 'STOP'
                document.getElementById('or').innerText = 'OR'
                if(document.getElementById('alarmPara').innerText != 'WAKE UP!'){
                    but = document.createElement('button')
                    but.style="font-size: 20px; height: 60px; width: 280px; margin-right: 400px;\
                    background-color: red;color: white; border-radius: 8px;"
                    but.id = 'snooze'
                    but.onclick = snooze
                    textnode = document.createTextNode("SNOOZE 10 MINUTES");
                    but.appendChild(textnode)
                    document.getElementsByClassName('buttons-container')[0].appendChild(but)
                }
                document.getElementById('alarmPara').innerText = 'WAKE UP!'

            }
        }

    }
}

//function that increases the user minutes, if the user wants to wake up after 10 minutes
function snooze(){
    setAlarm()
    pauseSound()
    document.getElementById('snooze').remove()
    document.getElementById('or').innerText = ''
    currentMinutes = document.getElementById('minute').innerHTML
    currentHour =    document.getElementById('hour').innerHTML
    if(newMinute > 50){
        newMinute = 60 - parseInt(currentMinutes)
        newHour = parseInt(currentHour) + 1
        if(newHour >= 10){
            document.getElementById('hour').innerText = newHour
        }
        else{
            document.getElementById('hour').innerText = '0'+newHour
        }
        document.getElementById('minute').innerText = '0'+newMinute
    }
    else{
        currentMinutes = document.getElementById('minute').innerText
        newMinute = parseInt(currentMinutes) + 10
        document.getElementById('minute').innerText = newMinute
    }
}

// function that cancel all the activities of the alarm.
function cancelAlarm(){
    if(document.getElementById('setAlarm').innerText == 'STOP'){
        document.getElementById('snooze').remove()
    }
    pauseSound()
    document.getElementById('or').innerText = ''
    document.body.style = "background-image: url('day.jpg')"
    document.getElementById('alarmPara').innerText = ''
    document.getElementById('setAlarm').innerText = 'SET ALARM'
    document.getElementById('soundButton').onclick = playSound
    document.querySelector('button').onclick = night_mode
    document.getElementById('prevButton').onclick = prevSound
    document.getElementById('nextButton').onclick = nextSound
    document.getElementById('hour-plus').onclick = hourPlus
    document.getElementById('hour-minus').onclick = hourMinus
    document.getElementById('minute-plus').onclick = minutePlus
    document.getElementById('minute-minus').onclick = minuteMinus
    document.getElementById('setAlarm').onclick = setAlarm
}