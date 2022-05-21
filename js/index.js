const navList = document.querySelector(".nav-items");
const toggleButton = document.querySelector(".toggle-button");

toggleButton.addEventListener("click", function () {
    if (navList.className.includes("nav-items-active"))
        navList.classList.remove("nav-items-active");
    else navList.classList.add("nav-items-active");
});
