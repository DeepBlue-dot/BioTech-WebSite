function openNav() {
    // Open sidebar
    document.getElementById("sideMenu").style.width = "275px";

    // Create and append foreground overlay
    var overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Adjust opacity as needed
    overlay.style.zIndex = "2";
    overlay.addEventListener("click", closeNav);
    document.body.appendChild(overlay);
}

function closeNav() {
    // Close sidebar
    document.getElementById("sideMenu").style.width = "0";

    // Remove foreground overlay
    var overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.parentNode.removeChild(overlay);
    }
}
