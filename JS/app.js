document.addEventListener('DOMContentLoaded', function() {

var forDropdown = document.querySelector(".for-dropdown");
var dropdown = document.querySelector(".dropdown");
console.log(forDropdown, dropdown);

forDropdown.addEventListener("mouseenter", function(){
  dropdown.style.display = "block";
});

forDropdown.addEventListener("mouseleave", function(){
  dropdown.style.display = "none";
});

var readMore = document.querySelectorAll(".read-more");
var more = document.querySelectorAll(".more");

for (var i = 0; i < readMore.length; i++) {
  readMore[i].addEventListener('click', function(){

// this odwołuje sie do buttonu.
    if(this.innerText === "WIĘCEJ") {
      this.previousElementSibling.style.display = "block";
      this.innerText = "MNIEJ";

    }else {
        this.previousElementSibling.style.display = "none";
        this.innerText = "WIĘCEJ";

    }
    console.log(this);
  })
}
});
