const hour = document.getElementById('hours');

const minute = document.getElementById('minutes');

const second = document.getElementById('seconds');

const ampmEl = document.getElementById('ampm');

function updateClock() {
    let h = new Date().getHours();

    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    if (h > 12) {
        h = h - 12;
        ampm = 'PM';
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampmEl, (innerText = ampm);

    if (h < 10) {
        h = "0" + h;
    } else {
        h;
    }

    if (m < 10) {
        m = "0" + m;
    } else {
        m;
    }
    if (s < 10) {
        s = "0" + s;
    } else {
        s;
    }




    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock();

