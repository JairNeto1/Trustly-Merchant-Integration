function cent() {
  document.querySelector('#five').classList.remove('amount-button-selected')
  document.querySelector('#fifty').classList.remove('amount-button-selected')
  document.querySelector('#custom').classList.remove('amount-button-selected')
  document.querySelector('.editon').classList.remove('amount-button-selected')
  document.querySelector('#cent').classList.add('amount-button-selected')
  document.querySelector('.editon').style.display = 'none'
  //var _cent = document.getElementById('#cent').value
}

function five() {
  document.querySelector('#fifty').classList.remove('amount-button-selected')
  document.querySelector('#custom').classList.remove('amount-button-selected')
  document.querySelector('#cent').classList.remove('amount-button-selected')
  document.querySelector('#five').classList.add('amount-button-selected')
  document.querySelector('.editon').style.display = 'none'
}

function fifty() {
  document.querySelector('#five').classList.remove('amount-button-selected')
  document.querySelector('#custom').classList.remove('amount-button-selected')
  document.querySelector('#cent').classList.remove('amount-button-selected')
  document.querySelector('#fifty').classList.add('amount-button-selected')
  document.querySelector('.editon').style.display = 'none'
}

function custom() {
  document.querySelector('#five').classList.remove('amount-button-selected')
  document.querySelector('#fifty').classList.remove('amount-button-selected')
  document.querySelector('#cent').classList.remove('amount-button-selected')
  document.querySelector('#custom').classList.add('amount-button-selected')
  document.querySelector('.editon').style.display = 'block'
}

// widget

var PayWithMyBankOptions = {
  closeButton: true,
  dragAndDrop: true,
  widgetContainerId: 'widget'
}

var establishData = {
  accessId: 'XHC67YWPe29WVg92EyZP',
  merchantId: '1017088088',
  merchantReference: Math.random(),
  description: 'Money2020',
  //showSuccessMessage: true,
  //successMessage: 'This transaction has been completed.',
  currency: 'USD',
  amount: '5.00',
  paymentType: 'Deferred',
  returnUrl: '#success',
  cancelUrl: '#cancel'
}

//Confirmation page

//Callback validation

PayWithMyBank.addPanelListener(function (command, event) {
  if (command === 'event' && event.type === 'new_location') {
    if (event.data.indexOf('#success') === 0) {
      document.querySelector('.modal').style.display = 'block'
      location = 'https://trustlyintegration.herokuapp.com/'
      //location = 'http://127.0.0.1:5502'
      console.log('[success]', event.data)
    } else {
      console.log('[cancel]', event.data)
      document.querySelector('.modal-denied').style.display = 'block'
      location = 'https://trustlyintegration.herokuapp.com/'
      //location = 'http://127.0.0.1:5502'
    }
    return false
  }
})

PayWithMyBank.selectBankWidget(establishData, PayWithMyBankOptions)
