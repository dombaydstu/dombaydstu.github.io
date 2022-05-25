window.onload = function () {

    var form = document.getElementById("application");

    var pristine = new Pristine(form);

    var inputs = document.getElementsByName("capit");

    inputs.forEach(el => {
        pristine.addValidator(el, function(value, el) {

            if (value.length && value[0] === value[0].toUpperCase() && !value.includes(' ')) {
               return true;
            }

            return false;

        }, "The first character must be capitalized", 2, false);
    });

    form.addEventListener('submit', function (e) {
        var inputs = document.querySelectorAll(".modal input");

        inputs.forEach(el => {
            var errors = pristine.getErrors(el);
            
            if (errors.length != 0) {
                el.classList.add("error-input")
            } else {
                el.classList.remove("error-input")
            }
        });
        
        var valid = pristine.validate();

        if (!valid) {
            e.preventDefault();
        }
    });
};