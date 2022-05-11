import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
  const forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input");

  checkNumInputs("input[name='user_phone']");

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
      if (form.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }
      console.log(formData);

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
