import closeAllModalWindow from "./closeAllModalWindow.js";
import calcScroll from "./calcScroll.js";

const popapImages = () => {
  const imgPopap = document.createElement("div"),
    bigImg = document.createElement("img"),
    worksImages = document.querySelector(".works"),
    scroll = calcScroll();

  document.body.appendChild(imgPopap);
  imgPopap.appendChild(bigImg);
  imgPopap.classList.add("popup");
  imgPopap.setAttribute("data-modal", "");
  imgPopap.style.justifyContent = "center";
  imgPopap.style.alignItems = "center";
  bigImg.style.maxWidth = 90 + "%";
  bigImg.style.maxHeight = 90 + "%";

  worksImages.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("preview")) {
      event.preventDefault();
      imgPopap.style.display = "flex";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scroll}px`;
      const path = target.parentNode.getAttribute("href");
      bigImg.setAttribute("src", path);
    }
  });
  imgPopap.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target === imgPopap) {
      imgPopap.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.paddingRight = `0px`;
      closeAllModalWindow();
    }
  });
};
export default popapImages;
