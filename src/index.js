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
  returnUrl: 'http://jairneto1.github.io/Trustly-Merchant-Integration',
  cancelUrl: 'http://jairneto1.github.io/Trustly-Merchant-Integration'
}

PayWithMyBank.selectBankWidget(establishData, PayWithMyBankOptions)
