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
  returnUrl: 'http://trustlyintegration.herokuapp.com',
  cancelUrl: 'http://trustlyintegration.herokuapp.com'
}

PayWithMyBank.selectBankWidget(establishData, PayWithMyBankOptions)
