const navMenu = document.getElementById('nav-menu'),
    navTogglre = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

const navbar = document.querySelector('nav.container')

//Menu show
navTogglre.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
});

//Menu Hidden
navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
})

//Search
const search =document.getElementById('search'),
    searchBtn = document.getElementById('search-btn'),
    searchClose = document.getElementById('search-close')

//Search Show
searchBtn.addEventListener('click',()=>{
    search.classList.add('show-search')
})
//Search Hidden
searchClose.addEventListener('click',()=>{
    search.classList.remove('show-search')
})

window && window.addEventListener('scroll', (event) => {
    const yOffset = window.scrollY
    if (yOffset > 400) {
        navbar.classList.add('hide')
    } else {
        navbar.classList.remove('hide')
    }
    var videoContainer = document.getElementById("video-container");
    var video = document.getElementById("my-video");

    // Kiểm tra nếu video hiện tại đã kết thúc hoặc không còn nhìn thấy trên màn hình
    if (video.ended || !isElementInViewport(videoContainer)) {
        // Thay đổi video mới
        video.href="intro2 - Made with Clipchamp.mp4";
        video.load();
        video.play();
    } else {
        video.pause()
    }
})

// Kiểm tra xem một phần tử có nằm trong tầm nhìn của người dùng hay không
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 200 &&
        rect.left >= 200 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// const btn = document.querySelector("#btn-cmt")
//
// console.log(btn);

const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
// btn.onclick = ()=>{
//     widget.style.display = "none";
//     post.style.display = "block";
//     editBtn.onclick = ()=>{
//         widget.style.display = "block";
//         post.style.display = "none";
//     }
//     return false;
// }

const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    widget.style.display = "none";
    post.style.display = "block";

    editBtn.onclick = ()=>{
        widget.style.display = "block";
        post.style.display = "none";
    }
})
