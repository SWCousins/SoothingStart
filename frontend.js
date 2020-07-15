let menuBox = document.querySelector(".menu");
let newsBox = document.querySelector(".main-news");
let adBox = document.querySelector(".ad-panel");
            
let homeIcon = document.querySelector(".home");
let carriageIcon = document.querySelector(".carriage");
let babyIcon = document.querySelector(".baby");
let classifiedsIcon = document.querySelector(".classifieds");
let forumIcon = document.querySelector(".forum");
            
menuBox.addEventListener('mouseover', function(){
    menuBox.classList.remove('col-0.5');
    menuBox.classList.add('col-2');
    
    newsBox.classList.remove('col-9');
    newsBox.classList.add('col-8');
    
    homeIcon.innerHTML = "Home";
    carriageIcon.innerHTML = "Childcare";
    babyIcon.innerHTML = " Parenting";
    classifiedsIcon.innerHTML = "Classifieds"
    forumIcon.innerHTML = "Forum"
            });
            
menuBox.addEventListener('mouseout', function(){
                
    menuBox.classList.remove('col-2');
    menuBox.classList.add('col-0.5');

    newsBox.classList.remove('col-8');
    newsBox.classList.add('col-9');
                
    homeIcon.innerHTML = "";
    carriageIcon.innerHTML = "";
    babyIcon.innerHTML = "";
    classifiedsIcon.innerHTML = "";
    forumIcon.innerHTML = "";
            });