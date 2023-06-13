document.addEventListener('DOMContentLoaded', function(){
    var dropdownSelections = document.querySelectorAll('.dropdown-selection');
    dropdownSelections.forEach(function(dropdownSelection) {
        dropdownSelection.addEventListener('click', function(){
            this.nextElementSibling.style.display = 
                this.nextElementSibling.style.display === 'none' ? 'block' : 'none';
        });
    });
});



document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle("show");
    });
});

