function checkIfFire() {
    //console.log("Checking if fire");
    if ($('.track-info__name')[0].innerText === "This Is America") {
        //console.log("Is fire")
        $('.playback-bar__progress-time').on("DOMSubtreeModified", function() {
            var playbackTime = $(".playback-bar__progress-time").text();
            if (playbackTime.startsWith("0:48")) {
                setTimeout(() => {
                    var audio = new Audio(chrome.runtime.getURL("gunshot.mp3"));
                    audio.volume = 0.5;
                    audio.play();
                }, 100);
            }
            if (playbackTime.startsWith("1:52")) {
                var audio = new Audio(chrome.runtime.getURL("gunshot2.mp3"));
                audio.volume = 0.5;
                audio.play();
            }
        });
    } else {
        $('.playback-bar__progress-time').off("DOMSubtreeModified");
    }
}
setTimeout(() => {
    //console.log("Plugin loaded");
    //console.log($('.track-info__name'))
    $('.track-info__name').on("DOMSubtreeModified", function() {
        //console.log("Track name changed")
        checkIfFire();
    })
    checkIfFire();
}, 2000)