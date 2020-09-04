// Get the modal
var modal = document.getElementById('overlay');

// Get the button that opens the modal
var btns = document.getElementsByClassName("btnPopup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("btnClose")[0];

// When the user clicks the button, open the modal 
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        modal.style.display = "block";
    }
    }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
