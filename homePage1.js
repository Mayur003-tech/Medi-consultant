function first(){
    document.getElementById("1").src="assets/slider3";
}
function second(){
    document.getElementById("1").src="assets/slider4";
}
function third(){
    document.getElementById("1").src="assets/background img.webp";
}
function fourth(){
    document.getElementById("1").src="assets/upload.webp";
}
function fifth(){
    document.getElementById("1").src="assets/slider3";
}

setInterval(first,2000);
setInterval(second,4000);
setInterval(third,6000);
setInterval(fourth,8000);
setInterval(fifth,10000);

// let slideIndex = 1;
//   showSlide(slideIndex);

//   function moveSlide(n) {
//     showSlide(slideIndex += n);
//   }

//   function showSlide(n) {
//     const slides = document.querySelectorAll('.slide');
//     if (n > slides.length) {
//       slideIndex = 1;
//     }
//     if (n < 1) {
//       slideIndex = slides.length;
//     }
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = 'none';
//     }
//     slides[slideIndex - 1].style.display = 'block';
//   }

