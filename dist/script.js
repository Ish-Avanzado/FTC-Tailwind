const burger = document.querySelector(".burger__menu");
const hNav = document.querySelector(".header__navm");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  hNav.classList.toggle("open");
});

const faqNavs = document.querySelectorAll(".faq__nav");

faqNavs.forEach((nav) => {
  nav.addEventListener("click", () => {
    const FaqItem = nav.parentElement;
    const FaqPop = FaqItem.querySelector(".faq__pop");

    document.querySelectorAll(".faq__pop").forEach((pop) => {
      if (pop !== FaqPop) {
        pop.classList.remove("active");
        pop.previousElementSibling.classList.remove("active");
      }
    });

    FaqPop.classList.add("active");
    nav.classList.add("active");
  });
});


const residentNav = document.querySelectorAll(".resident__nav");
const residentItem = document.querySelectorAll(".resident__item");

residentNav.forEach((Nav) => {
  Nav.addEventListener("click", () => {
    removeActiveNav();
    Nav.classList.add("active");

    const Item = document.querySelector(`#${Nav.id}-content`);
    removeActiveItem();
    Item.classList.add("active");
  });
});

function removeActiveNav() {
  residentNav.forEach((Nav) => {
    Nav.classList.remove("active");
  });
}

function removeActiveItem() {
  residentItem.forEach((item) => {
    item.classList.remove("active");
  });
}
