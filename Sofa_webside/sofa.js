let btn = document.querySelector('.nav_smart');
let change = document.querySelector('.nav_rht ');

btn.addEventListener("click", function() {
    if (change.style.display === "none" ) {
        change.style.display = "flex"; // Show
    } else {
        change.style.display = "none"; // Hide
    }
});