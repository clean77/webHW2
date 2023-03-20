const image = document.querySelector(".wood");
const audio = document.querySelector('.sound');

image.addEventListener("click", function (event)  {
    const target = event.target;
    // 確保是木魚圖片被點擊後才會開始進行
    if (target.alt === "wooden fish") {
        audio.currentTime = 0;
        audio.play();
    }
});