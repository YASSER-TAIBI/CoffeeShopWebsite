
    document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.querySelector('.custom-select');

    selectElement.addEventListener('change', function() {
    const options = selectElement.querySelectorAll('option');
    options.forEach(option => {
    option.style.color = option.selected ? 'white' : 'black';
});
});

    // Initial setup to ensure the selected option is white
    const initialOptions = selectElement.querySelectorAll('option');
    initialOptions.forEach(option => {
    option.style.color = option.selected ? 'white' : 'black';
});
});

    (function ($) {
        "use strict";
    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    })(jQuery);