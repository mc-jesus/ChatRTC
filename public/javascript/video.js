(function (){

    function initUserMedia() {
        um = navigator.getUserMedia || navigator.webkitGetUserMedia ||
               navigator.mozGetUserMedia || navigator.msGetUserMedia;
        
        if (!!um) {
            navigator.getUserMedia = um;
            return true;
        }
        return false;
    }
    
    toggleVideoPlayPause = function() {
        var video = document.getElementById('local_video');
        if (!video.paused) video.pause();
        else video.play();
    }
    
    window.addEventListener('load', function()
    {
        if (initUserMedia()) 
        {
            navigator.getUserMedia({
                video: true,
                audio: true
            }, function successCallback(localMediaStream) {
                var video = document.getElementById('local_video');
                console.log(video);
                window.localMediaStream = localMediaStream; // Save this for later
                video.src = window.URL.createObjectURL(localMediaStream);
            }, function errorCallback(e) {
                console.log("Failed getting user media");
                if (e) throw e;
            });
        }
        else 
        {
            console.log("Failer getting user media... Unsuportted browser");    
        }        
    });
  
})()