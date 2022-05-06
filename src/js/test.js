window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  ////////////////////// form
  const forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    inputsPhone = document.querySelectorAll(
      "input[name='user_phone']"
    );

  inputsPhone.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "");
    });
  });

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! с Вами скоро свяжутся",
    failure: "Что-то пошло не так...",
  };

  async function postData(url, data) {
    document.querySelector(".status").textContent =
      message.loading;

    let res = await fetch(`${url}`, {
      method: "POST",
      body: data,
    });

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${url}, status: ${res.status}`
      );
    }

    return await res.text();
  }

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (event.target) {
        event.preventDefault();
      }

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      form.appendChild(statusMessage);

      const formData = new FormData(form);

      postData("../assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch((err) => {
          console.log(err);
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 10000);
        });
    });
  });

  ///////////////////////////////// modal
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

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        // document.body.classList.remove("modal-open");
      }
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
  showModalByTime(".popup", 60000);

  /////////////////////// tabs
  const tabs = (
    headerTabsSelector,
    tabsSelector,
    contentSelector,
    activeClass
  ) => {
    const headerTabs = document.querySelector(
        headerTabsSelector
      ),
      tabs = document.querySelectorAll(tabsSelector),
      contents = document.querySelectorAll(contentSelector);

    function fadeTabContent() {
      contents.forEach((item) => {
        item.style.display = "none";
      });

      tabs.forEach((item) => {
        item.classList.remove(activeClass);
      });
    }

    function showTabContent(i = 0) {
      contents[i].style.display = "block";
      tabs[i].classList.add(activeClass);
    }

    fadeTabContent();
    showTabContent();

    headerTabs.addEventListener("click", (event) => {
      let target = event.target;

      if (target) {
        event.preventDefault();
        if (
          target.classList.contains(
            tabsSelector.replace(/\./, "")
          ) ||
          target.parentNode.classList.contains(
            tabsSelector.replace(/\./, "")
          )
        ) {
          // for (let i = 0; i < tabs.length; i++) {
          //   if (
          //     target == tabs[i] ||
          //     target.parentNode == tabs[i]
          //   ) {
          //     fadeTabContent();
          //     showTabContent(i);
          //   }
          // }
          // Идентично записи выше(for)
          tabs.forEach((tab, i) => {
            if (target == tab || target.parentNode == tab) {
              fadeTabContent();
              showTabContent(i);
            }
          });
        }
      }
    });
  };

  tabs(
    ".glazing_slider",
    ".glazing_block",
    ".glazing_content",
    ".active"
  );
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
});
