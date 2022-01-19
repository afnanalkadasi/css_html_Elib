// login
var modal2 = document.getElementById('idlog');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    console.log("test");
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// sign
var modal = document.getElementById('id11');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal ) {
    modal.style.display = "none";
  }
}
// show image in home
var modal3 = document.getElementById("myModal1");

var modalImg = document.getElementById("img01");
function image(event)  {    
    modal3.style.display = "block";
    modalImg.src = event.target.src;
}

var span2 = document.getElementsByClassName("close")[0];

span2.onclick = function () {
    modal3.style.display = "none";
}


// counter-container
const countdown=()=>{
    const upperDate = new Date('Jan 21,2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const diffDate = upperDate - currentDate;

    const second=1000;
    const minutes=second * 60;
    const hours =minutes * 60;
    const days=hours * 24;
  
    const remain_days=Math.floor(diffDate/days);
    const remain_hours=Math.floor((diffDate%days)/hours);
    const remain_minutes=Math.floor((diffDate%hours)/minutes);
    const remain_second=Math.floor((diffDate%minutes)/second);
    
    var d = document.getElementById('days');
    var h = document.getElementById('hours');
    var m = document.getElementById('minutes');
    var s = document.getElementById('seconds');
 
    d.innerHTML=remain_days;
    h.innerHTML=remain_hours;
    m.innerHTML=remain_minutes;
    s.innerHTML=remain_second;
}
setInterval(countdown,1000);

// counter-container2
const countdown2=()=>{
    const upperDate = new Date('Jan 22,2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const diffDate = upperDate - currentDate;

    const second=1000;
    const minutes=second * 60;
    const hours =minutes * 60;
    const days=hours * 24;
  
    const remain_days=Math.floor(diffDate/days);
    const remain_hours=Math.floor((diffDate%days)/hours);
    const remain_minutes=Math.floor((diffDate%hours)/minutes);
    const remain_second=Math.floor((diffDate%minutes)/second);
    
    var d = document.getElementById('days2');
    var h = document.getElementById('hours2');
    var m = document.getElementById('minutes2');
    var s = document.getElementById('seconds2');
 
    d.innerHTML=remain_days;
    h.innerHTML=remain_hours;
    m.innerHTML=remain_minutes;
    s.innerHTML=remain_second;
}
setInterval(countdown2,1000);

// counter-container3
const countdown3=()=>{
    const upperDate = new Date('Jan 24,2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const diffDate = upperDate - currentDate;

    const second=1000;
    const minutes=second * 60;
    const hours =minutes * 60;
    const days=hours * 24;
  
    const remain_days=Math.floor(diffDate/days);
    const remain_hours=Math.floor((diffDate%days)/hours);
    const remain_minutes=Math.floor((diffDate%hours)/minutes);
    const remain_second=Math.floor((diffDate%minutes)/second);
    
    var d = document.getElementById('days3');
    var h = document.getElementById('hours3');
    var m = document.getElementById('minutes3');
    var s = document.getElementById('seconds3');
 
    d.innerHTML=remain_days;
    h.innerHTML=remain_hours;
    m.innerHTML=remain_minutes;
    s.innerHTML=remain_second;
}
setInterval(countdown3,1000);
// counter-container4
const countdown4=()=>{
    const upperDate = new Date('Jan 27,2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const diffDate = upperDate - currentDate;

    const second=1000;
    const minutes=second * 60;
    const hours =minutes * 60;
    const days=hours * 24;
  
    const remain_days=Math.floor(diffDate/days);
    const remain_hours=Math.floor((diffDate%days)/hours);
    const remain_minutes=Math.floor((diffDate%hours)/minutes);
    const remain_second=Math.floor((diffDate%minutes)/second);
    
    var d = document.getElementById('days4');
    var h = document.getElementById('hours4');
    var m = document.getElementById('minutes4');
    var s = document.getElementById('seconds4');
 
    d.innerHTML=remain_days;
    h.innerHTML=remain_hours;
    m.innerHTML=remain_minutes;
    s.innerHTML=remain_second;
}
setInterval(countdown4,1000);
// counter-container5
const countdown5=()=>{
    const upperDate = new Date('Jan 29,2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const diffDate = upperDate - currentDate;

    const second=1000;
    const minutes=second * 60;
    const hours =minutes * 60;
    const days=hours * 24;
  
    const remain_days=Math.floor(diffDate/days);
    const remain_hours=Math.floor((diffDate%days)/hours);
    const remain_minutes=Math.floor((diffDate%hours)/minutes);
    const remain_second=Math.floor((diffDate%minutes)/second);
    
    var d = document.getElementById('days5');
    var h = document.getElementById('hours5');
    var m = document.getElementById('minutes5');
    var s = document.getElementById('seconds5');
 
    d.innerHTML=remain_days;
    h.innerHTML=remain_hours;
    m.innerHTML=remain_minutes;
    s.innerHTML=remain_second;
}
setInterval(countdown5,1000);

//////////// slider image/////////

function openModal() {
    document.getElementById("myModal_im").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal_im").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
  
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  /////sal////////////
var modal_s = document.getElementById('sal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_s ) {
    modal_s.style.display = "none";
  }
}
            //////////read more////////
      function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "اقرا المزيد"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "اقرا اقل"; 
          moreText.style.display = "inline";
        }
      }