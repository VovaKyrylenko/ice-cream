const e=document.querySelector("[data-menu]"),t=document.querySelector("[data-menu-button]");t.addEventListener("click",(()=>{t.classList.toggle("is-open"),e.classList.toggle("is-open");const d="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!d),document.body.classList.toggle("body--hidden")}));
//# sourceMappingURL=index.3f22f799.js.map
