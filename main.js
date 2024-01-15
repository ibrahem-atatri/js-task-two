var registerForm = document.querySelector(".registerForm");
var result = document.querySelector('form p');

registerForm.onsubmit = function(event){
            event.preventDefault();
            var element = event.target.elements;
           var exchange= element['exchange'].value;
           var amount = element['amount'].value;
           var exchange_amount;
           if(exchange == 'dollar')
           exchange_amount=amount * 3.75;
         else if (exchange == 'dinar')
         exchange_amount=amount * 5.29;
      else 
      exchange_amount = amount;
   result.textContent=exchange_amount;
            
}  