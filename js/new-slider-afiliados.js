// let slideIndex = 0;

// showSlidesAfiliados();

// function showSlidesAfiliados() {
  
//     let i;
//     let slides = document.getElementsByClassName("new-slider-afiliados__frame");
//     let dots = document.getElementsByClassName("new-slider-afiliados__dot");
  
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
  
//     slideIndex++;
  
//     if (slideIndex > slides.length) {slideIndex = 1}    
        
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" new-slider-afiliados__dot--active", "");
//     }
    
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " new-slider-afiliados__dot--active";
//     setTimeout(showSlides, 4000);

// }


function cerrar() {
  document.getElementById("cerrar").style.display = "none";
}