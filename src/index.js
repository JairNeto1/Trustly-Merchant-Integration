var PayWithMyBankOptions = {
  closeButton: true,
  dragAndDrop: true,
  widgetContainerId: 'widget'
}

var establishData = {
  accessId: 'XHC67YWPe29WVg92EyZP',
  merchantId: '1017088088',
  merchantReference: 'Test1',
  description: 'Money2020',
  currency: 'USD',
  amount: '5.00',
  merchantReference: 'SandBoxTransaction',
  paymentType: 'Deferred',
  returnUrl: 'https://merchant.com/paywithmybank/return',
  cancelUrl: 'https://merchant.com/paywithmybank/cancel'
}

PayWithMyBank.selectBankWidget(establishData, PayWithMyBankOptions)
