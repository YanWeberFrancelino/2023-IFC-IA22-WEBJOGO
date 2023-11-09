function createFootstepsAudio() {
    const footstepsAudio = document.createElement("audio");
    footstepsAudio.id = "footsteps";
    footstepsAudio.src = "plugins/passos.mp3";
    document.body.appendChild(footstepsAudio);
}


createFootstepsAudio();
const footstepsSound = document.getElementById("footsteps");
let typingTimeout;
let typingStartTime;
let typingEndTime;


function stopFootstepsSound() {
    footstepsSound.pause();
    footstepsSound.currentTime = 0;
}

document.addEventListener("keydown", (event) => {
    clearTimeout(typingTimeout);
    

    if (event.key.match(/^[A-Za-z]$/)) {
        typingStartTime = new Date().getTime();
        footstepsSound.play();
    }
});

document.addEventListener("keyup", () => {
    typingEndTime = new Date().getTime();
    const typingDuration = typingEndTime - typingStartTime;


    let speed = 1.0;

    
    if (typingDuration > 0) {
        speed = 1000 / typingDuration;
    }

    speed = Math.min(Math.max(speed, 0.2), 5.0);

    
    footstepsSound.playbackRate = speed;


    typingTimeout = setTimeout(stopFootstepsSound, 1000);
});
