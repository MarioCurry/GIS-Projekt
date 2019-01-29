var songlist = ["Bark.wav", "Fart.wav", "Gunshot.wav", "Joker's%20Laugh.wav", "Knock.wav", "Meow.wav", "Missle%20Lock%20On.mp3", "Nuclear%20Alarm.ogg"]
var allAudios = document.querySelectorAll('audio');
var currentAudio;


function playEffect(number) {

    if(currentAudio) {
        currentAudio.pause();
    }

    var audiofile = new Audio(songlist[number]);
    currentAudio = audiofile;
    audiofile.play();
}
