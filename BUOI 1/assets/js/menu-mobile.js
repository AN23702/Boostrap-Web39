// Lam menu mobile
    // Truy cap phan tu

const mobileMenuButton = document.querySelector(".mobile-icon");
const headerBottom = document.querySelector(".header-bottom");

const mobileClose = document.querySelector(".close-mobile");


    //Mo menu mobile
    // Bat su kien nguoi dung click mobileMenuButton

mobileMenuButton.addEventListener("click",()=>{
// alert("123");
headerBottom.style.left="0";
});

    //Dong menu mobile
    //Bat su kien nguoi dung click
mobileClose.addEventListener("click",()=>{
    headerBottom.style.left="-100%";
});