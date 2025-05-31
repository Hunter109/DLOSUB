// Navbar Toogle
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");


toggleBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");
    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
})

let logoLink = document.querySelector('.navbar .logo img');
logoLink.addEventListener('click', () => {
    window.location.href = '/index.html'
}
)


//crad tilt
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    reset: false,

});
