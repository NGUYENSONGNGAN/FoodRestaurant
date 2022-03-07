let menu = document.querySelector("#menubars")
let navbar = document.querySelector(".navbar")
let search = document.querySelector("#search-icon")
menu.onclick = () => {
    menu.classList.toggle('fa-xmark')
    navbar.classList.toggle("active")

}
window.onscroll = () => {
    menu.classList.remove('fa-xmark')
    navbar.classList.remove("active")

}
search.onclick = () => {
    document.querySelector("#search-form").classList.toggle("active")
}
document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove("active")
}
