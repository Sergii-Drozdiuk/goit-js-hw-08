import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player('vimeo-player');
let time = JSON.parse(localStorage.getItem("videoplayer-current-time")) ?? 0;

player.setCurrentTime(time);
player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(data) {
   localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
};
