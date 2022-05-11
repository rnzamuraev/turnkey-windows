import closeAllModalWindow from "./closeAllModalWindow.js";
import calcScroll from "./calcScroll.js";

const modals = () => {
  const scroll = calcScroll();

  function bindModal(
    openSelector,
    modalSelector,
    closeSelector,
    modalClose = true
  ) {
    const open = document.querySelectorAll(openSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    open.forEach((item) => {
      item.addEventListener("click", (event) => {
        if (event.target) {
          event.preventDefault();
          closeAllModalWindow();
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
          // document.body.classList.add("modal-open");
          document.body.style.paddingRight = `${scroll}px`;
        }
      });
    });

    close.addEventListener("click", () => {
      closeAllModalWindow();
      document.body.style.overflow = "";
      // document.body.classList.remove("modal-open");
      document.body.style.paddingRight = `0px`;
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal && modalClose == true) {
        closeAllModalWindow();
        document.body.style.overflow = "";
        // document.body.classList.remove("modal-open");
        document.body.style.paddingRight = `0px`;
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).style.display =
        "block";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scroll}px`;
    }, time);
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(
    ".phone_link",
    ".popup",
    ".popup_dialog .popup_close"
  );
  bindModal(
    ".popup_calc_btn",
    ".popup_calc",
    ".popup_calc_close"
  );
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );
  showModalByTime(".popup", 60000);
};

export default modals;
