const modals = () => {
  
  function bindModal(
    openSelector,
    modalSelector,
    closeSelector
  ) {
    const open = document.querySelectorAll(openSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    open.forEach((item) => {
      item.addEventListener("click", (event) => {
        if (event.target) {
          event.preventDefault();
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        // document.body.classList.add("modal-open");
      });
    });

    close.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
      // document.body.classList.remove("modal-open");
    });

    modal.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
      // document.body.classList.remove("modal-open");
    });
  }

  function showModalByTime(selector, time) {
    // function
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
  // showModalByTime(".popup", 60000);
};

export default modals;
