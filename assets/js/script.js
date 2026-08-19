const heading = [...document.querySelectorAll(".heading-panel")];

function onClickHandler() {
  // const currentActive = document.querySelector(".heading-panel.active");

  // if (this.classList.contains("active")) {
  //   this.classList.remove("active");
  //   return;
  // }
  // if (currentActive) {
  //   currentActive.classList.remove("active");
  // }
  // this.classList.add("active");

  // document.querySelector(".heading-panel.active").classList.remove("active");

  const activeState = this.className;
  if (document.querySelector(".heading-panel.active")) {
    document.querySelector(".heading-panel.active").classList.remove("active");
  }

  // this.classList.add("active");

  if (activeState.includes("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
}

heading.forEach((h) => h.addEventListener("click", onClickHandler));