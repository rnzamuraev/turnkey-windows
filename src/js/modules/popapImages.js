import closeAllModalWindow from "./closeAllModalWindow.js";

const popapImages = () => {
  const imgPopap = document.createElement("div"),
    bigImg = document.createElement("img"),
    worksImages = document.querySelector(".works");

  document.body.append(imgPopap);
  imgPopap.append(bigImg);
  imgPopap.classList.add("popup");
  imgPopap.setAttribute("data-modal", "");
  imgPopap.style.justifyContent = "center";
  imgPopap.style.alignItems = "center";
  // bigImg.style.width = 80 + "%";
  bigImg.style.height = 90 + "%";

  worksImages.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("preview")) {
      event.preventDefault();
      imgPopap.style.display = "flex";
      document.body.style.overflow = "hidden";
      // document.body.style.paddingRight = 17 + "px";
      const path = target.parentNode.getAttribute("href");
      bigImg.setAttribute("src", path);
    }
  });
  imgPopap.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target === imgPopap) {
      imgPopap.style.display = "none";
      document.body.style.overflow = "";
      closeAllModalWindow();
      // document.body.style.paddingRight = 0 + "px";
    }
  });
};
export default popapImages;
