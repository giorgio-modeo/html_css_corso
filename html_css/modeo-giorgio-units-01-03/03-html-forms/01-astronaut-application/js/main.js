// This code selects the form element with id "form"
let form = document.getElementById("form")
// This code adds an event listener to the form when it's submitted
    form.addEventListener("submit",(e)=>{
    // This code prevents the default behavior of the form submitting
    e.preventDefault();

    // This code displays an alert that says "funziona"
    alert("funziona")
});
// This code is an example of using JavaScript to handle form submissions without reloading the page.