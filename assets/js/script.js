document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('nyan-button').addEventListener('click', function() {
        var nyanCat = document.getElementById('nyan-cat');
        var nyanAudio = document.getElementById('nyan-audio');
        nyanCat.style.display = 'block';
        nyanAudio.play();

        var pos = -150;  // starting position (should match the CSS)
        var id = setInterval(frame, 10);  // change the second parameter to make the animation faster or slower

        function frame() {
            if (pos == window.innerWidth) {
                clearInterval(id);
                nyanCat.style.display = 'none';
                nyanAudio.pause();
                nyanAudio.currentTime = 0;
            } else {
                pos++;
                nyanCat.style.left = pos + 'px';
            }
        }
    });
});