'use strict';

/* ========== 1. Toggle Helper Function ========== */
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

/* ========== 2. Sidebar Toggle (Mobile) ========== */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

/* ========== 3. Testimonials Modal (Team Members Popup) ========== */
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

if (testimonialsItem.length > 0) {
  testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      testimonialsModalFunc();
    });
  });
}

if (modalCloseBtn && overlay) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}

/* ========== 4. Project Filtering (By Category) ========== */
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

/* ========== 5. Contact Form Validation ========== */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form) {
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}

/* ========== 6. Page Navigation (SPA Style) ========== */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(navLink => {
  navLink.addEventListener("click", function () {
    const targetPage = this.innerHTML.toLowerCase();

    pages.forEach(page => {
      if (targetPage === page.dataset.page) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    navigationLinks.forEach(link => link.classList.remove("active"));
    this.classList.add("active");

    window.scrollTo(0, 0);
  });
});

/* ========== 7. Background Animation ========== */
// Base background animation
document.body.style.background = "linear-gradient(270deg, #4facfe, #00f2fe)";
document.body.style.backgroundSize = "400% 400%";
document.body.style.animation = "backgroundMove 12s ease infinite";

// Faster animation on click
document.body.addEventListener('click', function () {
  document.body.style.animation = "backgroundMove 6s ease infinite";
  setTimeout(() => {
    document.body.style.animation = "backgroundMove 12s ease infinite";
  }, 2000);
});

/* ========== 8. Extra Animation on Click for Elements ========== */
document.querySelectorAll("a, button, [data-filter-btn]").forEach(elem => {
  elem.addEventListener("click", () => {
    elem.style.transform = "scale(0.95)";
    elem.style.transition = "transform 0.2s ease";
    setTimeout(() => {
      elem.style.transform = "scale(1)";
    }, 200);
  });
});

/* ========== 9. Keyframes for Background Animation (Injected into CSS) ========== */
const style = document.createElement('style');
style.innerHTML = `
@keyframes backgroundMove {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}`;
document.head.appendChild(style);
