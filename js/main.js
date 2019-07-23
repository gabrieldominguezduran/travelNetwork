const form1 = document.querySelector('#validForm1');
const form2 = document.querySelector('#validForm2');
const email1 = document.querySelector('#email1');
const email2 = document.querySelector('#email2');
const passUser = document.querySelector('#passUser');
const pass1 = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');
const emailRegEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const passRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;


function validate1(){

    let ok = true;


        if(emailRegEx.test(email1.value)){
           email1.className = 'valid';
        }else{
            ok = false; 
            email1.className = 'invalid';
        }
  
        if(passUser.value.length > 4){
            passUser.className = 'valid';
        }else{
            ok = false;   
            passUser.className = 'invalid';
        }

        if(ok === false){
            return ok;
        }
     }


  function validate2(){

        let ok = true;

        if(emailRegEx.test(email2.value)){
            email2.className = 'valid';
          }else{
            ok = false; 
            email2.className = 'invalid';
          }
      
        if(passRegEx.test(pass1.value)){
          pass1.className = 'valid';
        }else{
          ok = false;    
          pass1.className = 'invalid';
        }
  
        if(pass1.value !== pass2.value || pass2.value == '') {
          ok = false;   
          pass2.className = 'invalid';
        } else {
            pass2.className = 'valid';
        }

    if(ok === false){
        return ok;
    }
  }


    
    




 