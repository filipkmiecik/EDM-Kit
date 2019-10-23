document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#channel1Rec').addEventListener('click', btnChannelClick1)
document.querySelector("#channel1Play").addEventListener("click", playChannel1)
document.querySelector('#channel2Rec').addEventListener('click', btnChannelClick2)
document.querySelector("#channel2Play").addEventListener("click", playChannel2)
document.querySelector('#channel3Rec').addEventListener('click', btnChannelClick3)
document.querySelector("#channel3Play").addEventListener("click", playChannel3)
document.querySelector('#channel4Rec').addEventListener('click', btnChannelClick4)
document.querySelector("#channel4Play").addEventListener("click", playChannel4)
document.querySelector("#buttonsPlayAll").addEventListener("click", playAllChannels)

function show1() {
    document.getElementById('channel1Rec').style.display = 'block';
    document.getElementById('channel2Rec').style.display = 'none';
    document.getElementById('channel3Rec').style.display = 'none';
    document.getElementById('channel4Rec').style.display = 'none';
}

function show2() {
    document.getElementById('channel1Rec').style.display = 'none';
    document.getElementById('channel2Rec').style.display = 'block';
    document.getElementById('channel3Rec').style.display = 'none';
    document.getElementById('channel4Rec').style.display = 'none';
}

function show3() {
    document.getElementById('channel1Rec').style.display = 'none';
    document.getElementById('channel2Rec').style.display = 'none';
    document.getElementById('channel3Rec').style.display = 'block';
    document.getElementById('channel4Rec').style.display = 'none';
}

function show4() {
    document.getElementById('channel1Rec').style.display = 'none';
    document.getElementById('channel2Rec').style.display = 'none';
    document.getElementById('channel3Rec').style.display = 'none';
    document.getElementById('channel4Rec').style.display = 'block';
}

let channelStart
const channel1 = []
const channel2 = []
const channel3 = []
const channel4 = []
const sounds = {
    KeyQ: '#perc1',
    KeyW: '#perc2',
    KeyE: '#perc3',
    KeyR: '#perc4',
    KeyT: '#perc5',
    KeyY: '#perc6',
    KeyU: '#snare1',
    KeyI: '#snare2',
    KeyO: '#snare3',
    KeyP: '#snare4',
    KeyA: '#snare5',
    KeyS: '#snare6',
    KeyD: '#bassdrum1',
    KeyF: '#bassdrum2',
    KeyG: '#bassdrum3',
    KeyH: '#bassdrum4',
    KeyJ: '#bassdrum5',
    KeyK: '#bassdrum6',
    KeyL: '#hihat1',
    KeyZ: '#hihat2',
    KeyX: '#hihat3',
    KeyC: '#hihat4',
    KeyV: '#hihat5',
    KeyB: '#hihat6'
}


function playChannel1() {
    channel1.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}

function playChannel2() {
    channel2.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}

function playChannel3() {
    channel3.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}

function playChannel4() {
    channel4.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}


function onKeyPress(e) {
    playSound(sounds[e.code]);
    const time = Date.now() - channelStart;
    const sound = {
        sound: e.code,
        time: time
    }
    if (document.getElementById('channel1').checked) {
        channel1.push(sound)
    } else if (document.getElementById('channel2').checked) {
        channel2.push(sound)
    } else if (document.getElementById('channel3').checked) {
        channel3.push(sound)
    } else if (document.getElementById('channel4').checked) {
        channel4.push(sound)
    }
}

function playSound(id) {
    const audioTag = document.querySelector(id)
    audioTag.currentTime = 0
    audioTag.play()
}

function btnChannelClick1() {
    channel1.length = 0
    channelStart = Date.now()
}

function btnChannelClick2() {
    channel2.length = 0
    channelStart = Date.now()
}

function btnChannelClick3() {
    channel3.length = 0
    channelStart = Date.now()
}

function btnChannelClick4() {
    channel4.length = 0
    channelStart = Date.now()
}

function playAllChannels() {
    playChannel1();
    playChannel2();
    playChannel3();
    playChannel4();
}