let forms = document.querySelectorAll('.main__authorization-block , .main__registration-block');

forms.forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let email = form.querySelector('.input-email').value;
        let password = form.querySelector('.input-password').value;
        let error = form.querySelector('.error');

        if(email !== '' && password !== '') {
            window.location.href = "main.html";
        } else {
            error.textContent = "Please enter email and password*";
        }
    });
});
