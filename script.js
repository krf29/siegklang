// Dropdown-Menu

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// Counter

const counts = document.querySelectorAll(".count");
const speed = 49;

counts.forEach((counter) => {
  function upData() {
    const target = Number(counter.getAttribute("data-target"));
    const count = Number(counter.innerText);
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.floor(inc + count);
      setTimeout(upData, 15);
    } else {
      counter.innerText = target;
    }
  }
  upData();
});
