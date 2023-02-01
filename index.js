let menu = document.querySelector('.menu');
let close = document.querySelector('.close');
let navBar = document.getElementById('nav-bar');

menu.addEventListener('click', function(){
    navBar.style.display = 'flex';
})

close.addEventListener('click', function(){
    navBar.style.display = 'none';
})

let right = document.querySelector('.right');
let left = document.querySelector('.left');
let desktopPic = document.getElementById('desktop');
let mobilePic = document.getElementById('mobile');
let mainPara = document.querySelectorAll('.mainPara');
let x = window.matchMedia('(min-width: 768px)');

right.addEventListener('click', function(){
    if(desktopPic.getAttribute('srcset') === "images/desktop-image-hero-2.jpg" || mobilePic.getAttribute('src') === "images/mobile-image-hero-2.jpg"){
        desktopPic.setAttribute('srcset', 'images/desktop-image-hero-3.jpg');
        mobilePic.setAttribute('src', 'images/mobile-image-hero-3.jpg')
        mainPara[0].style.display = 'none';
        mainPara[1].style.display = 'none';
        if(x.matches){
            mainPara[2].style.display = 'grid';
        }else {
            mainPara[2].style.display = 'block';
        }
    } else if(desktopPic.getAttribute('srcset') === "images/desktop-image-hero-3.jpg" || mobilePic.getAttribute('src') === "images/mobile-image-hero-3.jpg"){
        desktopPic.setAttribute('srcset', 'images/desktop-image-hero-1.jpg');
        mobilePic.setAttribute('src', 'images/mobile-image-hero-1.jpg')
        mainPara[2].style.display = 'none';
        mainPara[1].style.display = 'none';
        if(x.matches){
            mainPara[0].style.display = 'grid';
        }else {
            mainPara[0].style.display = 'block';
        }
    }else {
        desktopPic.setAttribute('srcset', 'images/desktop-image-hero-2.jpg');
        mobilePic.setAttribute('src', 'images/mobile-image-hero-2.jpg')
        mainPara[0].style.display = 'none';
        mainPara[2].style.display = 'none';
        if(x.matches){
            mainPara[1].style.display = 'grid';
        }else {
            mainPara[1].style.display = 'block';
        }
    }
})

left.addEventListener('click', function(){
    if(desktopPic.getAttribute('srcset') === "images/desktop-image-hero-2.jpg" || mobilePic.getAttribute('src') === "images/mobile-image-hero-2.jpg"){
        desktopPic.setAttribute('srcset', 'images/desktop-image-hero-1.jpg');
        mobilePic.setAttribute('src', 'images/mobile-image-hero-1.jpg')
        mainPara[2].style.display = 'none';
        mainPara[1].style.display = 'none';
        if(x.matches){
            mainPara[0].style.display = 'grid';
        }else {
            mainPara[0].style.display = 'block';
        }
    } else if(desktopPic.getAttribute('srcset') === "images/desktop-image-hero-3.jpg" || mobilePic.getAttribute('src') === "images/mobile-image-hero-3.jpg"){
        desktopPic.setAttribute('srcset', 'images/desktop-image-hero-2.jpg');
        mobilePic.setAttribute('src', 'images/mobile-image-hero-2.jpg')
        mainPara[0].style.display = 'none';
        mainPara[2].style.display = 'none';
        if(x.matches){
            mainPara[1].style.display = 'grid';
        }else {
            mainPara[1].style.display = 'block';
        }
    }else {
        desktopPic.setAttribute('srcset', 'images/desktop-image-hero-3.jpg');
        mobilePic.setAttribute('src', 'images/mobile-image-hero-3.jpg')
        mainPara[0].style.display = 'none';
        mainPara[1].style.display = 'none';
        if(x.matches){
            mainPara[2].style.display = 'grid';
        }else {
            mainPara[2].style.display = 'block';
        }
    }
})

document.addEventListener('keydown', function(e){
    e.preventDefault()
    if(e.keyCode === 39){
        if(desktopPic.getAttribute('srcset') === "images/desktop-image-hero-2.jpg" || mobilePic.getAttribute('src') === "images/mobile-image-hero-2.jpg"){
            desktopPic.setAttribute('srcset', 'images/desktop-image-hero-3.jpg');
            mobilePic.setAttribute('src', 'images/mobile-image-hero-3.jpg')
            mainPara[0].style.display = 'none';
            mainPara[1].style.display = 'none';
            if(x.matches){
                mainPara[2].style.display = 'grid';
            }else {
                mainPara[2].style.display = 'block';
            }
        } else if(desktopPic.getAttribute('srcset') === "images/desktop-image-hero-3.jpg" || mobilePic.getAttribute('src') === "images/mobile-image-hero-3.jpg"){
            desktopPic.setAttribute('srcset', 'images/desktop-image-hero-1.jpg');
            mobilePic.setAttribute('src', 'images/mobile-image-hero-1.jpg')
            mainPara[2].style.display = 'none';
            mainPara[1].style.display = 'none';
            if(x.matches){
                mainPara[0].style.display = 'grid';
            }else {
                mainPara[0].style.display = 'block';
            }
        }else {
            desktopPic.setAttribute('srcset', 'images/desktop-image-hero-2.jpg');
            mobilePic.setAttribute('src', 'images/mobile-image-hero-2.jpg')
            mainPara[0].style.display = 'none';
            mainPara[2].style.display = 'none';
            if(x.matches){
                mainPara[1].style.display = 'grid';
            }else {
                mainPara[1].style.display = 'block';
            }
    }
    }else if(e.keyCode === 37){
        if(desktopPic.getAttribute('srcset') === "images/desktop-image-hero-2.jpg" || mobilePic.getAttribute('src') === "images/mobile-image-hero-2.jpg"){
            desktopPic.setAttribute('srcset', 'images/desktop-image-hero-1.jpg');
            mobilePic.setAttribute('src', 'images/mobile-image-hero-1.jpg')
            mainPara[2].style.display = 'none';
            mainPara[1].style.display = 'none';
            if(x.matches){
                mainPara[0].style.display = 'grid';
            }else {
                mainPara[0].style.display = 'block';
            }
        } else if(desktopPic.getAttribute('srcset') === "images/desktop-image-hero-3.jpg" || mobilePic.getAttribute('src') === "images/mobile-image-hero-3.jpg"){
            desktopPic.setAttribute('srcset', 'images/desktop-image-hero-2.jpg');
            mobilePic.setAttribute('src', 'images/mobile-image-hero-2.jpg')
            mainPara[0].style.display = 'none';
            mainPara[2].style.display = 'none';
            if(x.matches){
                mainPara[1].style.display = 'grid';
            }else {
                mainPara[1].style.display = 'block';
            }
        }else {
            desktopPic.setAttribute('srcset', 'images/desktop-image-hero-3.jpg');
            mobilePic.setAttribute('src', 'images/mobile-image-hero-3.jpg')
            mainPara[0].style.display = 'none';
            mainPara[1].style.display = 'none';
            if(x.matches){
                mainPara[2].style.display = 'grid';
            }else {
                mainPara[2].style.display = 'block';
            }
        }
    }
})