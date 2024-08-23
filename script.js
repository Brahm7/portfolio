// Scroll to the top on page load
window.addEventListener("load", function () {
  history.replaceState(null, null, " ");
  window.scrollTo(0, 0); // Scroll to the top-left corner
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const id = this.getAttribute("href").substring(1);
    const element = document.getElementById(id);

    // Update the URL
    history.pushState(null, null, `#${id}`);

    // Smooth scroll to the section
    element.scrollIntoView({ behavior: "smooth" });
  });
});
