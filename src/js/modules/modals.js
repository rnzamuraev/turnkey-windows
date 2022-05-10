const modals = () => {
  function bindModal(
    openSelector,
    modalSelector,
    closeSelector,
    modalClose = true
  ) {
    const open = document.querySelectorAll(openSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      window = document.querySelectorAll("[data-modal]");

    const closeAllModalWindow = () => {
      window.forEach((item) => {
        item.style.display = "none";
      });
    };

    open.forEach((item) => {
      item.addEventListener("click", (event) => {
        if (event.target) {
          event.preventDefault();
          closeAllModalWindow();
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
          // document.body.classList.add("modal-open");
        }
      });
    });

    close.addEventListener("click", () => {
      closeAllModalWindow();
      document.body.style.overflow = "";
      // document.body.classList.remove("modal-open");
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal && modalClose == true) {
        closeAllModalWindow();
        document.body.style.overflow = "";
        // document.body.classList.remove("modal-open");
      }
    });
  }

  function showModalByTime(selector, time) {
    ///// function
    setTimeout(function () {
      document.querySelector(selector).style.display =
        "block";
      document.body.style.overflow = "hidden";
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
