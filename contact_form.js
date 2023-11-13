const scriptURL = 'https://script.google.com/macros/s/AKfycbzr1TKgn9jqwdjXRDbxDl8RpqqnrzylLZYUjsVpXvKwwnPCxf3XjqlmUGsUdpTdj3F4/exec'
const form = document.forms['submit-to-google-sheet'];
const success = document.getElementById('success')

form.addEventListener('submit' , e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form),}
  
  )
    .then(response => {
        success.innerHTML = "আপনার ফ্রমটি ‍সফলভাবে সাবমিট হয়েছে......."
         setTimeout(function(){
            success.innerHTML = ""
         },10)
    form.reset();
    })
    .catch(error => console.error('Error!', error.message))
    
})

