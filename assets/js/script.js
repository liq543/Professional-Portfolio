document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('nyan-button').addEventListener('click', function() {
        var nyanCat = document.getElementById('nyan-cat');
        nyanCat.style.display = 'block';

        var pos = -771;  // starting position (should match the CSS)
        var id = setInterval(frame, 1);  // change the second parameter to make the animation faster or slower

        function frame() {
            if (pos == window.innerWidth) {
                clearInterval(id);
                nyanCat.style.display = 'none';
            } else {
                pos++;
                nyanCat.style.left = pos + 'px';
            }
        }
    });
});