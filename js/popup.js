// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var images = document.querySelectorAll('.image-popup');
var modalImg = document.getElementById("popupImage");

images.forEach(image => {
    image.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = "block";
        modalImg.src = this.src;  // Directly use the clicked image's src
    });
});


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
