let senderName = document.querySelector('#senderName').value;
let email = document.querySelector('#email').value;
let message = document.querySelector('#message').value;
let sections = document.querySelectorAll('section');

(function() {
    // emailjs id account
    emailjs.init('T8L8dKd-WJKco-DbU');
})();



window.onload = function() {
   document.getElementById('contact-form').addEventListener('submit', function(event) {
       // Check if the form input is not empty
       var templateParams = {
        senderName : senderName,
        email : email,
        message : message
    };
       
       // id from emailjs
       emailjs.send("service_4seg50s","template_2z8jbxf", templateParams)
           .then(function() {
               alert('Message has been sent');
           }, function(error) {
               alert('FAILED...', error);
           });

       
   });
}

// for scroll effect

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }

    })

}