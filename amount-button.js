$(document).ready(function () {
  // Global for custom amount state
  var CUSTOM_AMOUNT_ACTIVE = false
  var KEYS = {
    RETURN: 13
  }

  var getKeyCodeFromEvent = function (event) {
    if (!event) return 0
    return event.which || event.keyCode || 0
  }

  var errorMsg = {
    errorMessages: {
      emptyAmount: 'Please enter the amount before selecting your bank.',
      bigAmount: 'Please enter an amount smaller than the limit informed.'
    },
    getErrorContent: function () {
      return $('.custom-amount-error-msg')
    },
    showError: function (errorType) {
      this.getErrorContent().text(this.errorMessages[errorType])
      this.getErrorContent().show()
    },
    hideError: function () {
      this.getErrorContent().hide()
    }
  }

  var getInputCustomAmount = function () {
    return $("input[data-currency-mask='usd']")
  }

  var getCustomAmountWrapper = function () {
    return $('.custom-amount-wrapper')
  }

  var getForm = function () {
    return $('#pwmbForm')
  }

  var getWidgetContainer = function () {
    return $('#widget-container')
  }

  var signAndContinue = function (dataToSign, callback) {
    var calculateSignature = $.ajax({
      dataType: 'json',
      url: getForm().attr('action'),
      method: 'POST',
      data: dataToSign
    })

    $.when(calculateSignature)
      .done(function (data, textStatus, jqXHR) {
        callback.call(this, data)
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log(
          'Sorry. We could not complete your request.',
          textStatus + ': ' + errorThrown
        )
      })
  }

  var startDynamicWidget = function () {
    if (getWidgetContainer().length) {
      var serializedData = getForm().serializeFormJSON()
      serializedData.isDynamicWidget = true
      signAndContinue(serializedData, PayWithMyBank.selectBankWidget)
    }
  }

  // Amount buttons
  document('#amount-buttons').on('click', 'a.amount-button', function (event) {
    $('#amount-buttons > a').removeClass('amount-button-selected')
    getCustomAmountWrapper().removeClass('active')

    var $el = $(event.currentTarget)
    $el.addClass('amount-button-selected')

    var newAmount = $el.data('amount')
    $('#amount').val(newAmount)

    CUSTOM_AMOUNT_ACTIVE = false

    startDynamicWidget()

    errorMsg.hideError()

    event.preventDefault()
  })

  // Amount custom value
  $("[data-custom-amount='set-custom-amount']").on('click', function (event) {
    resetAmount()

    $('#amount-buttons > a').removeClass('amount-button-selected')
    var $el = $(event.currentTarget)

    $el.addClass('amount-button-selected')
    getCustomAmountWrapper().addClass('active')

    editAmount()

    CUSTOM_AMOUNT_ACTIVE = true

    event.preventDefault()
  })

  // Input masking for custom value
  getInputCustomAmount().mask('0,000.00', { reverse: true })

  getInputCustomAmount().on('input', function () {
    var $el = getInputCustomAmount()

    if ($el.val() === '') resetAmount()

    errorMsg.hideError()

    var newAmount = $el.val().split(',').join('')
    $('#amount').val(newAmount)
  })

  getInputCustomAmount().on('focus', function () {
    getCustomAmountWrapper().addClass('edit-on')
  })

  var checkInputCustomAmountValue = function () {
    var $el = getInputCustomAmount()
    var value = $el.val().split(',').join('')

    if (CUSTOM_AMOUNT_ACTIVE && parseFloat(value) > MAX_AMOUNT) {
      $el.val('')
      $('#amount').val('')
      errorMsg.showError('bigAmount')
    }
    if (value === '') {
      errorMsg.showError('emptyAmount')
    } else if (value.split('.').length === 1) {
      value += '.00'
      $el.val(value)
      $('#amount').val(value)
    }
  }

  getInputCustomAmount().on('blur', function () {
    checkInputCustomAmountValue()
  })

  getInputCustomAmount().on('keydown', function (event) {
    if (getKeyCodeFromEvent(event) === KEYS.RETURN) {
      var $el = getInputCustomAmount()
      $el.blur()
      confirmAmount()
    }
  })

  $('#confirm-custom-amount').on('click', function (event) {
    confirmAmount()
    event.preventDefault()
  })

  $('#edit-custom-amount').on('click', function (event) {
    editAmount()
    event.preventDefault()
  })

  var editAmount = function () {
    getInputCustomAmount().focus()
    getCustomAmountWrapper().addClass('edit-on')
  }

  var confirmAmount = function () {
    startDynamicWidget()
    getCustomAmountWrapper().removeClass('edit-on')
  }

  var resetAmount = function () {
    $('#amount').val(0)
    startDynamicWidget()
  }

  // Establish new transaction
  $('form').submit(function (event) {
    // setup some local variables
    var $form = $(this)
    serializedData = $form.serialize()

    signAndContinue(serializedData, PayWithMyBank.establish)

    event.preventDefault()
    return false
  })

  setTimeout(startDynamicWidget, 1)
})
