const menu_icon = document.getElementById("menu_open_icon");
const left_nav_bar = document.getElementById("left_nav_bar");
const topnav = document.getElementsByClassName("topnav");
const left_nav_bar_header =document.getElementsByClassName("left_nav_bar_header");

menu_icon.addEventListener('click', function(){
    left_nav_bar.style.display="flex";
    left_nav_bar_header[0].style.display="none";
    topnav[0].style.display="none";
    console.log("cliled");
})