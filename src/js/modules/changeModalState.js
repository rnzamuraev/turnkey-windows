import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {

  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindActionToElems(selector, event, prop) {
    let elem = document.querySelectorAll(selector);
    state[prop] = 0;

    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
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
};

export default changeModalState;
