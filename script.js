const carousels = document.querySelectorAll(".carrusel");

carousels.forEach(carousel => {

    const images = carousel.querySelectorAll("img");

    const next = carousel.querySelector(".adelante");

    const prev = carousel.querySelector(".atras");

    let index = 0;

    function showImage(i) {

        images.forEach(img => {
            img.classList.remove("activo");
        });

        images[i].classList.add("activo");
    }

    next.addEventListener("click", () => {

        index++;

        if (index >= images.length) {
            index = 0;
        }

        showImage(index);

    });

    prev.addEventListener("click", () => {

        index--;

        if (index < 0) {
            index = images.length - 1;
        }

        showImage(index);

    });

});