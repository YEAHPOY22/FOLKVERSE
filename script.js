let senderName = document.querySelector('#senderName').value;
let email = document.querySelector('#email').value;
let message = document.querySelector('#message').value;


(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('T8L8dKd-WJKco-DbU');
})();



window.onload = function() {
   document.getElementById('contact-form').addEventListener('submit', function(event) {
       event.preventDefault();
       // Check if the form input is not empty
       var templateParams = {
        senderName : senderName,
        email : email,
        message : message
    };
       
       // these IDs from the previous steps
       emailjs.send("service_4seg50s","template_2z8jbxf", templateParams)
           .then(function() {
               alert('Message has been sent');
           }, function(error) {
               alert('FAILED...', error);
           });

       
   });
}
