import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  // const windowForm = document.querySelectorAll(
  //     ".balcon_icons_img"
  //   ),
  //   windowWidth = document.querySelectorAll("#width"),
  //   windowHeight = document.querySelectorAll("#height"),
  //   windowViewType =
  //     document.querySelectorAll("#view_type"),
  //   windowProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindActionToElems(selector, event, prop) {
    let elem = document.querySelectorAll(selector);
    state[prop] = 0;

    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            // state[prop] = 0;
            state[prop] = i;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              i === 0
                ? (state[prop] = "Холодное")
                : (state[prop] = "Теплое");
              elem.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            // console.log(state);
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }
        console.log(state);
        // if (items.length > 1) {
        //   state[prop] = i;
        // } else {
        //   state[prop] = item.value;
        // }
        // console.log(state);
      });
    });
  }
  bindActionToElems(".balcon_icons_img", "click", "form");
  bindActionToElems("#width", "input", "width");
  bindActionToElems("#height", "input", "height");
  bindActionToElems("#view_type", "change", "type");
  bindActionToElems(".checkbox", "change", "profile");

  // bindActionToElems(windowForm, "click", "form");
  // bindActionToElems(windowWidth, "input", "width");
  // bindActionToElems(windowHeight, "input", "height");
  // bindActionToElems(windowViewType, "change", "type");
  // bindActionToElems(windowProfile, "change", "profile");

  // windowForm.forEach((item, i = 0) => {
  //   state.form = 0;
  //   item.addEventListener("click", () => {
  //     state.form = i;
  //     console.log(state);
  //   });
  // });

  // windowWidth.addEventListener("input", () => {
  //   state.width = windowWidth.value;
  //   console.log(state);
  // });

  // windowHeight.addEventListener("input", () => {
  //   state.height = windowHeight.value;
  //   console.log(state);
  // });

  // windowViewType.addEventListener("change", (e) => {
  //   state.type = e.target.textContent;
  //   console.log(state);
  // });

  // windowProfile.forEach((item, i) => {
  //   item.addEventListener("click", () => {
  // if (item.checkid == true) {
  //   windowProfile.checkid = false;
  //   item[i].checkid = true;
  // }

  //     if (i == 0) {
  //       state.profile = "Холодное";
  //       console.log(state);
  //     } else if (i == 1) {
  //       state.profile = "Теплое";
  //       console.log(state);
  //     }
  //   });
  // });
};

export default changeModalState;
