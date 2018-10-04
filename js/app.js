// do not remove this line
$(document).foundation()

// write your own JS here:




var mask = document.getElementsByClassName('mask')[0]; 
var imgBox = document.getElementsByClassName('imgBox')[0]; 
var dataTitle = document.getElementsByClassName('data-title')[0]; 
var video = document.getElementsByTagName('video')[0]; 
var a = document.getElementsByClassName('-webkit-media-controls-fullscreen-button')[0];

imgBox.onclick = function () { 
    imgBox.classList.add('img_current'); 
    mask.style.display = 'block'; 
    dataTitle.style.display = 'block'; 
}

video.onclick = function () { 
    video.setAttribute('class', 'current'); 
    mask.style.display = 'block'; 
}

mask.onclick = function () { 
    mask.style.display = 'none'; 
    imgBox.classList.remove('img_current');
    video.classList.remove('current'); 
    dataTitle.style.display = 'none'; 
}