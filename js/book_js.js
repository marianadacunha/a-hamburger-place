function validate() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;

    if (name === '') {
        alert("Please enter a name.");
    }
    else if (email === '') {
        alert("Please enter an email.");
    }
    else {
        alert("Thanks, " + name + "! Your reservation is now being processed. You will soon receive an e-mail with the confirmation details.");
    }
}