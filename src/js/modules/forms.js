const forms = () => {
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
};

export default forms;
