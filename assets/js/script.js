    document.addEventListener('DOMContentLoaded', (event) => {
        var nyanSong = new Audio('./assets/audio/nyan.mp3');
        var header = document.querySelector('header');
        var nyanCount = 0;
        var finishedNyanCount = 0;
        var nyanCounter = document.getElementById('nyan-counter');
        
        document.getElementById('nyan-button').addEventListener('click', function(event) {
            event.preventDefault();
            var nyanCat = document.createElement('div');
            nyanCat.classList.add('nyan-cat');
            nyanCat.innerHTML = '<img src="./assets/img/nyan.png" alt="Nyan Cat" />';
            document.body.appendChild(nyanCat);
        
            var pos = -150;
            var id = setInterval(frame, 5);
        
            if (nyanCount === 0) {
                nyanSong.play();
                nyanCounter.style.opacity = 1;
                header.classList.add('header-rainbow');
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
                        header.classList.remove('header-rainbow');
                    }
                } else {
                    pos++;
                    nyanCat.style.left = pos + 'px';
                }
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        var navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(function(link) {
          link.addEventListener('click', function(e) {
            // Check if the clicked link is not the nyan-button
            if (this.getAttribute('id') !== 'nyan-button') {
              e.preventDefault();
      
              document.querySelectorAll('#portfolio, #about, #contact').forEach(function(section) {
                section.classList.remove('active');
              });
      
              var targetSection = document.querySelector(this.getAttribute('href'));
              targetSection.classList.add('active');
            }
          });
        });
    
        document.querySelector('#portfolio').classList.add('active');
    });
    