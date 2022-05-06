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
        ////// Идентично записи выше(for)
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

export default tabs;
