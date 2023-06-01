document.addEventListener('DOMContentLoaded', function(){
    var dropdownSelections = document.querySelectorAll('.dropdown-selection');
    dropdownSelections.forEach(function(dropdownSelection) {
        dropdownSelection.addEventListener('click', function(){
            this.nextElementSibling.style.display = 
                this.nextElementSibling.style.display === 'none' ? 'block' : 'none';
        });
    });
});
