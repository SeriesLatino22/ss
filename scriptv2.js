 const heartContainer = document.getElementById("heart-container");
const imageUrls = [
    "https://cdn.iconscout.com/icon/free/png-512/free-care-2387662-1991058.png?f=avif&w=512",
            "https://cdn.iconscout.com/icon/free/png-512/free-haha-2387660-1991060.png?f=avif&w=512",
            "https://cdn.iconscout.com/icon/free/png-512/free-love-2387666-1991064.png?f=avif&w=512",
            "https://cdn.iconscout.com/icon/free/png-512/free-like-2387659-1991059.png?f=avif&w=512",
            "https://cdn.iconscout.com/icon/free/png-512/free-like-2387659-1991059.png?f=avif&w=512"
        ];
const heartButton = document.getElementById("heart-button");
let animationInterval;

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    const image = new Image();
    image.src = randomImageUrl;

    // Establece el ancho y alto de la imagen (ajusta según tus necesidades)
    image.style.width = "24px"; // Ancho de un emoji típico
    image.style.height = "24px"; // Alto de un emoji típico

    heart.appendChild(image);
    heart.style.left = Math.random() * 40 + "%";
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

function startAnimation() {
    animationInterval = setInterval(createHeart, 700);
}

function stopAnimation() {
    clearInterval(animationInterval);
}

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        startAnimation();
    } else {
        stopAnimation();
    }
});

startAnimation();

setInterval(() => {
    heartButton.classList.add("scaled");
    setTimeout(() => {
        heartButton.classList.remove("scaled");
    }, 4000);
}, 10000);   
