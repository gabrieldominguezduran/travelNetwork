
// Boostrap validation function
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation'); 

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  // function for match passwords 
  var pass1 = document.querySelector(".pass1");
  var pass2 = document.querySelector(".pass2");

function validatePassword(){
  if(pass1.value != pass2.value) {
    pass2.setCustomValidity("Passwords Don't Match");
  } else {
    pass2.setCustomValidity('');
  }
}

pass1.onchange = validatePassword;
pass2.onkeyup = validatePassword;

//JavaScript for Sign In form

const inputs = document.querySelectorAll('.input');

// regex patterns
const patterns = {
        
        password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
        email: /([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

// attach keyup events to inputs
inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
          validate(e.target, patterns[e.target.attributes.name.value]);
          
  });
});













