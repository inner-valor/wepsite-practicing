let curTime = new Date()

document.getElementById("curtime").innerHTML = curTime.toUTCString();

if (curTime !== curTime.toUTCString()) {
    document.getElementById("curtime").innerHTML = curTime.toUTCString();


}



