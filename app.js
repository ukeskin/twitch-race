const box = document.getElementById('box');

const client = new tmi.Client({
	channels: [ 'umutkeskin26' ]
});

client.connect();

let count = 0;

client.on('message', (channel, tags, message, self) => {
    if (self) return true;
    if (message === '!box') {
        count+= 10;
        box.style.left = count + 'px';
    }
});

