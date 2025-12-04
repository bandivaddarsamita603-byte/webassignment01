document.getElementById("toggleBio").addEventListener("click", function () {
    const content = document.querySelector(".hidden-text");
    content.style.display = content.style.display === "block" ? "none" : "block";
});