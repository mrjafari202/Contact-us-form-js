document.getElementById('contactForm').addEventListener('submit', function(event) {  
    event.preventDefault();  

    const firstName = document.getElementById('firstName').value.trim();  
    const lastName = document.getElementById('lastName').value.trim();  
    const email = document.getElementById('email').value.trim();  
    const queryType = document.getElementById('queryType').value;  

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  

    if (!firstName || !lastName || !email || !queryType) {  
        alert("لطفاً تمام فیلدها را پر کنید.");  
        return;  
    }  

    if (!emailPattern.test(email)) {  
        alert("لطفاً یک آدرس ایمیل معتبر وارد کنید.");  
        return;  
    }  

    document.getElementById('successMessage').classList.remove('hidden');  
    document.getElementById('contactForm').reset();  
});