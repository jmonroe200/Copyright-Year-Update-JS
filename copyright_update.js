//when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    //get the span element
    const yrSpan = document.querySelector ('.copyright_year');
    //get the current year
    const currentYr = new Date().getFullYear();
    //set the year span elements text to the current year
    yrSpan.textContent - currentYr;
});