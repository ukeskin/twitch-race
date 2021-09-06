const car_red = document.getElementById('car_red');
const car_blue = document.getElementById('car_blue');
const client = new tmi.Client({
	channels: [ 'umutkeskin26' ]
});

client.connect();

let count_red = 0;
let count_blue = 0;
        
client.on('message', (channel, tags, message, self) => {
    if (self) return true;
    if (message === '!red') {
        count_red += 10;
        car_red.style.left = count_red + 'px';
    } 
    if (message === '!blue') {
        count_blue += 10;
        car_blue.style.left = count_blue + 'px';
    }
});
