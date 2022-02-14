$('document').ready(function(){
  const inputValidator = (...input) => {
    return input.every( num => typeof num === "number" && !isNaN(num))
  }


  

  /* validate inputs */
  $('input[type="number"]').each(function(index, element){
    element.addEventListener('keydown', function(e){
      if(!/[0-9]/.test(e.key)){
        element.nextElementSibling.textContent = 'Field contains alphabets'
      }else{
        element.nextElementSibling.textContent = ''
        // element.nextElementSibling.textContent = ''
      }

    })
  })


  $('#form').on('submit', function(e){
    e.preventDefault();
    inputs = $('input[type="number"]')
    sum = parseInt(inputs[0].value) + parseInt(inputs[1].value)
    $('#result')[0].innerHTML = '<strong>The sum is: '+sum + '</strong>'
    $('#result').removeClass('invisible')
  })

  




})