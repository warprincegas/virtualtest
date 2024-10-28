import Home from "./pages/home.js";
import About from "./pages/about.js";
import Project from "./pages/projects.js";
import Contact from "./pages/contact.js";
import "./style.css";

export const routes = {
  "/": Home,
  "/about": About,
  "/projects": Project,
  "/contact": Contact,
};

console.log(Project);

const menuBtn = document.getElementById("menu-btn");

const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("show-menu");
});

document.addEventListener("DOMContentLoaded", function () {
  const loadingSpinner = document.querySelector(".loader");
  const appContent = document.getElementById("app");

  setTimeout(() => {
    loadingSpinner.style.display = "none";

    appContent.style.display = "block";
  }, 2000);
});

function navigate() {
  const path = location.hash.slice(1) || "/";
  const page = routes[path] || Home;
  document.getElementById("app").innerHTML = page();
  hideMenu();
}

window.addEventListener("hashchange", navigate);

window.addEventListener("load", navigate);
window.addEventListener("scroll", hideMenu);

function hideMenu() {
  menu.classList.remove("show-menu");
  menuBtn.classList.remove("open");
}

document
  .querySelectorAll("a")
  .forEach((elem) => elem.addEventListener("click", hideMenu));
