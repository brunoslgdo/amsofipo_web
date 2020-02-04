let slideIndex = 0;

showSlides();

function showSlides() {
  
    let i;
    let slides = document.getElementsByClassName("new-slider__frame");
    let dots = document.getElementsByClassName("new-slider__dot");
  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
  
    slideIndex++;
  
    if (slideIndex > slides.length) {slideIndex = 1}    
        
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" new-slider__dot--active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " new-slider__dot--active";
    setTimeout(showSlides, 4000);

}