const PayWithMyBankOptions = {
  closeButton: true,
  dragAndDrop: true,
  widgetContainerId: 'widget'
}

const establishData = {
  accessId: 'XzHpRUr7RF75hg9nC5x2',
  merchantId: '1012523953',
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

function showModal(modalClassName) {
  document.querySelector(`.${modalClassName}`).style.display = 'block'
  setTimeout(
    () => document.querySelector(`.${modalClassName}`).classList.add('hide'),
    3000
  )
}

PayWithMyBank.addPanelListener(function (command, event) {
  if (command === 'event' && event.type === 'new_location') {
    if (event.data.indexOf('#success') === 0) {
      location = '/thank-you.html'
      // location = 'https://trustlyintegration.herokuapp.com/'
      // location = 'http://127.0.0.1:5502'
    } else {
      showModal('modal-denied')
      location = 'https://trustlyintegration.herokuapp.com/'
      // location = 'http://127.0.0.1:5502'
    }
    return false
  }
})

PayWithMyBank.selectBankWidget(establishData, PayWithMyBankOptions)
