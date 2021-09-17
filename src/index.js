var PayWithMyBankOptions = {
  closeButton: true,
  dragAndDrop: true,
  widgetContainerId: 'widget'
}

var establishData = {
  accessId: 'XHC67YWPe29WVg92EyZP',
  merchantId: '1017088088',
  merchantReference: 'Money2020',
  description: 'Money2020',
  currency: 'USD',
  amount: '0.50',
  paymentType: 'Deferred',
  returnUrl: '#success',
  cancelUrl: '#cancel'
}

PayWithMyBank.addPanelListener(function (command, event) {
  if (command === 'event' && event.type === 'new_location') {
    if (event.data.indexOf('#success') === 0) {
      location = 'https://trustlyintegration.herokuapp.com/'
      console.log('[success]', event.data)
    } else {
      console.log('[cancel]', event.data)
    }
    return false
  }
})

PayWithMyBank.selectBankWidget(establishData, PayWithMyBankOptions)
