document.getElementById('login-btn').addEventListener('click', function (event) {
    console.log(event)
    event.preventDefault();
    const acountNumber = document.getElementById('acount-number').value;
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    if(acountNumber.length === 11){
        console.log('yes')
        if(convertedPin == 1234){
            window.location.href = './main.html'
        }
        else{
            alert('pin thik nai')
        }
    }
    else{
        alert('acount number thik nai')
    }
})