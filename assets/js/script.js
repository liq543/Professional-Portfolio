document.addEventListener('DOMContentLoaded', (event) => {
    var nyanSong = new Audio('./assets/audio/nyan.mp3');
    var nyanCount = 0;
    var finishedNyanCount = 0;
    var nyanCounter = document.getElementById('nyan-counter');
    
    document.getElementById('nyan-button').addEventListener('click', function() {
        var nyanCat = document.createElement('div');
        nyanCat.classList.add('nyan-cat');
        nyanCat.innerHTML = '<img src="./assets/img/nyan.png" alt="Nyan Cat" />';
        document.body.appendChild(nyanCat);
    
        var pos = -150;  // starting position (should match the CSS)
        var id = setInterval(frame, 5);  // change the speed of the animation by changing the second parameter
    
        if (nyanCount === 0) {
            nyanSong.play();
            nyanCounter.style.opacity = 1;
        }
        nyanCount++;
    
        function frame() {
            if (pos == window.innerWidth) {
                clearInterval(id);
                nyanCat.parentNode.removeChild(nyanCat);
                nyanCount--;
                finishedNyanCount++;
                nyanCounter.getElementsByTagName('span')[0].textContent = finishedNyanCount;
                if (nyanCount === 0) {
                    nyanSong.pause();
                    nyanSong.currentTime = 0;
                    nyanCounter.style.opacity = 0;
                }
            } else {
                pos++;
                nyanCat.style.left = pos + 'px';
            }
        }
    });
});    