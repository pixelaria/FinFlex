$(function (){
  console.log('init');
  
  $('.select__placeholder').click(function(e){
    $(this).parent().toggleClass('select--active');
  });

  $('.select__item').click(function(e){
    console.log('select__item');
    
    var val = $(this).data('value');
    var text = $(this).html();
    
    var $select = $(this).closest('.select');
    var $input = $select.find('.select__input');
    var $placehoder = $select.find('.select__placeholder');

    $input.val(val);
    $placehoder.html(text);
    $select.removeClass('select--active');
  });

  $('.radio__item').click(function(e){
    console.log('select__item');
    
    var val = $(this).data('value');
    var text = $(this).html();
    
    var $select = $(this).closest('.select');
    var $input = $select.find('.select__input');
    var $placehoder = $select.find('.select__placeholder');

    $input.val(val);
    $placehoder.html(text);
    $select.removeClass('select--active');
  });


  
  
  var slideoutBtn = document.querySelector('.navbar-toggler');

  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('navbar'),
    'padding': 220,
    'tolerance': 70,
    'side': 'right',
    'tolerance': 70,
    'touch': false

  });


  // Toggle button
  slideoutBtn.addEventListener('click', function() {
    slideout.toggle();
  });

  

});



