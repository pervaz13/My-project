
// Function to toggle dropdown menu
function toggleDropdown() {
    let menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Function to change responsive mode
function setResponsiveMode(mode) {
    document.body.className = mode;
    document.getElementById("dropdownMenu").style.display = "none"; // Hide menu after selection
}