// Side Navigation Sliding Bar (start)
function openNav() {  // this defines a function called 'openNav()'
  document.getElementById("mySidenav").style.width = "300px"; // this opens the side menu by making it 200 pixels wide
}

function closeNav() {  // this defines a function called 'closeNav()'
  document.getElementById("mySidenav").style.width = "0"; // this closes the side menu by making it 0 pixels wide
}
// Side Navigation Sliding Bar (end)




// Main Slideshow (start) 'used in index.html home page'
var slideIndex = 0; // this declares a variable called 'slideIndex', and sets its value to integer 0
showSlides(); // this calls the 'showSlides()' function, which should run as this file is loaded into an HTML file

function showSlides() { // this defines a function called 'showSlides()'

  var i; // this declares a variable called 'i'


  // The following line of code declares a variable called slides
  //  it sets its value to that of getting elements with the class
  //  name 'mySlides'.
  var slides = document.getElementsByClassName("mySlides"); 


  // This is a 'for loop'. This one sets variable 'i' to integer 0.
  // It is then set to run if the value of 'i' is less than the
  //   integer value of the length of the 'slides' variable.
  // Each time it completes the loop, it adds 1 to the value of
  //   variable 'i'.
  for (i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";  // this line gets the index of 'slides' variable that is represented by
                                       //  the current value of 'i'. It then gets its 'display' selector attribute
                                       // from its 'style' attribute, and sets it to 'none'; thus hiding the image.
  }

  slideIndex++; // increment the value of 'slideIndex' up adding 1

  // if the 'slideIndex' value is greater than the number of slides, the following line resets 'slideIndex' to 1
  if (slideIndex > slides.length) {slideIndex = 1}

  slides[slideIndex-1].style.display = "block";  // this line gets the index of 'slides' variable that is represented
                                                 //  by the current value of 'slideIndex', minus one. It then gets its
                                                 //  'display' selector attribute, and sets it to 'block'; show in the
                                                 //  image.

  setTimeout(showSlides, 5000); // Change image every 5000 milliseconds (every 5 seconds), by having the 'showSlides'
                                //  code wait that duration.
}
// Main Slideshow (end)
