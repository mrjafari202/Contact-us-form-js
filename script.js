
const form = document.getElementById("contactForm");  

const hideError = (errorSpan) => {  
    errorSpan.style.display = 'none';  
};  

form.addEventListener("submit", function(event) {  
    event.preventDefault(); 

    const firstName = document.getElementById("firstName").value.trim();  
    const lastName = document.getElementById("lastName").value.trim();  
    const email = document.getElementById("email").value.trim();   
    const textQustion = document.getElementById("textQustion").value;   

    let formIsValid = true;  

 
    if (!firstName) {  
        document.getElementById("firstNameError").style.display = 'block';  
        formIsValid = false;  
    } else {  
        hideError(document.getElementById("firstNameError"));  
    }  

    if (!lastName) {  
        document.getElementById("lastNameError").style.display = 'block';  
        formIsValid = false;  
    } else {  
        hideError(document.getElementById("lastNameError"));  
    }  

    if (!email) {  
        document.getElementById("emailError").style.display = 'block';  
        formIsValid = false;  
    } else {  
        hideError(document.getElementById("emailError"));  
    }   
    if (!textQustion) {  
        document.getElementById("textQustionError").style.display = 'block';  
        formIsValid = false;  
    } else {  
        hideError(document.getElementById("textQustionError"));  
    }   
    if (!formIsValid) {  
        return; 
    } else {  
        const successMessage = document.getElementById("successMessage");  
        successMessage.style.display = 'block';  
 
        setTimeout(function() {  
            successMessage.style.display = 'none';  
        }, 3000);
 
        form.reset();   
        document.querySelectorAll('.error').forEach(span => span.style.display = 'none'); 
    }  
});  
