
const soundMenu = document.getElementById('soundMenu');
const menuSom = document.getElementById('menuSom');
const playImg = document.getElementById('playImg');

soundMenu.addEventListener('click', () => {
    if (menuSom.paused) {
        menuSom.play();
        playImg.src = 'play.png';
    } else {
        menuSom.pause();
        playImg.src = 'play_mute.png';
    }
});
 
