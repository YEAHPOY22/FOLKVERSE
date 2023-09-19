(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('T8L8dKd-WJKco-DbU');
})();
window.onload = function() {
   document.getElementById('contact-form').addEventListener('submit', function(event) {
       event.preventDefault();
       // generate a five digit number for the contact_number variable
       this.senderName.value = Math.random() * 100000 | 0;
       // these IDs from the previous steps
       emailjs.sendForm('service_4seg50s', 'template_2z8jbxf', this)
           .then(function() {
               console.log('SUCCESS!');
           }, function(error) {
               console.log('FAILED...', error);
           });
   });
}