var getCustomAmountWrapper = function () {
  return $('.custom-amount-wrapper')
}

var getForm = function () {
  return $('#pwmbForm')
}

var getWidgetContainer = function () {
  return $('#widget-container')
}

var startDynamicWidget = function () {
  if (getWidgetContainer().length) {
    var serializedData = getForm().serializeFormJSON()
    serializedData.isDynamicWidget = true
    signAndContinue(serializedData, PayWithMyBank.selectBankWidget)
  }
}

// Amount buttons
function cent() {
  document.querySelector('#five').classList.remove('amount-button-selected')
  document.querySelector('#fifty').classList.remove('amount-button-selected')
  document.querySelector('#custom').classList.remove('amount-button-selected')
  document.querySelector('.editon').classList.remove('amount-button-selected')
  document.querySelector('#cent').classList.add('amount-button-selected')
  document.querySelector('.editon').style.display = 'none'
  //document.querySelector('amount-button-selected').value = startDynamicWidget
  //document
  //.querySelector('#amount-button-selected')
  //.addEventListener('onclick', PayWithMyBank.selectBankWidget)
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
