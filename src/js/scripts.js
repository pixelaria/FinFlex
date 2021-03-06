var Calc;
Calc = {
  init:function() {
    console.log('init calc');

    Calc.$calc = $('.calc');

    $('.select__input--group').change(function(e){
      console.log('select__input--group changed');
      var group = $(this).data('param');
      
      var $group_new = Calc.$calc.find('.calc__group[data-group="'+group+'"]');
      var $group_old = Calc.$calc.find('.calc__group--active');

      $group_old.find('input').val('');
      $group_old.removeClass('calc__group--active');
      
      $group_new.addClass('calc__group--active');
      $group_new.find('.select__item:first-child').trigger('click');
      
    });

    $('.select__input--dep').change(function(e){
      console.log('select__input--group changed');
      var param = $(this).data('param');
      var dep= $(this).data('dep');
      
      console.log('.calc__field--dep[data-dep="'+dep+'"]');
      var $field = $('.calc__field--dep[data-dep="'+dep+'"]');
      
      
      if (param) {
        $field.removeClass('calc__field--hide');
      } else {
        $field.addClass('calc__field--hide'); 
        $field.find('input').val('');
      }
    });

    if ($('.calc--main').length)
      $('.select--group .select__item:first-child').trigger('click'); 
    else 
      $('.select__item:first-child').trigger('click'); 
  }
};



$(function (){
  console.log('init 1.1');
  
  $('.select__placeholder').click(function(e){
    $(this).parent().toggleClass('select--active');
  });

  $('.select__item').click(function(e){
    console.log('select__item');
    
    var val = $(this).data('value'),
        text = $(this).data('text'),
        param = $(this).data('param');
    var $select = $(this).closest('.select');
    var $input = $select.find('.select__input');
    var $placehoder = $select.find('.select__placeholder');

    $placehoder.html(text);
    $select.removeClass('select--active');
    
    $input.val(val);
    
    if (param) {
      $input.data('param',param);
    } else {
      $input.removeData('param');
    }
    $input.trigger('change');
  });


  $('.radio__item').click(function(e){
    console.log('radio__item');
    
    var val = $(this).data('value');
    var text = $(this).html();
    
    var $radio = $(this).closest('.radio');
    var $input = $radio.find('.radio__input');
    
    $input.val(val);
    $radio.find('.radio__item').removeClass('radio__item--active');
    $(this).addClass('radio__item--active');
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

  $('.navbar__toggler').click(function(e){
    var $item = $(this).closest('.navbar__item');
    var $sub = $item.find('.navbar__sublist');

    $sub.toggleClass('navbar__sublist--active');

  });

  if ($('#map').length) {
    ymaps.ready(function(){
      console.log('ymaps ready');
      

      map = new ymaps.Map("map", {
          center: [59.670684, 29.903532],
          zoom: 14,
          controls: []
      });
      placemark=new ymaps.Placemark(
        [59.66880, 29.908552],
        {
          balloonContent:"Производство",
          balloonContentHeader:"Производство",
          balloonContentBody:"п.Терволово, ул. Ленинградская, д. 15"
        },
        { 
          
          
          iconLayout: 'default#image',
          iconImageHref: '/wp-content/themes/pixelaria/img/icon-pin-map.png',
          iconImageSize: [40, 51]
        
        });

      
      map.geoObjects.add(placemark);
    }); 
  }

  $('.slider').lightSlider({
    gallery: true,
    item: 1,
    loop: false,
    slideMargin: 0,
    thumbItem: 5
  });

  if ($('.calc').length) {
    Calc.init();
  }

  $('.im--phone').mask('+7 (000) 000-00-00');
  $('.im--number').mask('0#');

  // Popup callbacks
  $('body').delegate('*[data-event="popup"]', 'click', function(e) {
    console.log('popup event');
    var popup = $(this).data('popup'),
        title = $(this).data('title'),
        btn = $(this).data('btn');
    
    if (popup) {
      var $popup = $('#'+popup)
      $popup.find('.popup__title').html(title);
      $popup.find('.popup__action').val(title);
      if (btn) $popup.find('.popup__btn').html(btn);
      
      $popup.addClass('popup--active');
      $('body').addClass('body--noscroll');
    }
    return false;
  });

  $('body').click(function(e) {
    if (!$(e.target).closest(".popup__form").length) {
      var $popup = $('.popup--active');
      if ($popup.length) {
        $('body').removeClass('body--noscroll');
        $popup.removeClass('popup--active');
        if ($popup.hasClass('popup--remove')) {
          $popup.remove();
        }
      }
    }
  });


  $('body').delegate('.popup__closer', 'click', function(e) {
    var $popup = $(this).closest('.popup');
    
    $('body').removeClass('body--noscroll');
    $popup.removeClass('popup--active');
    
    if ($popup.hasClass('popup--remove')) {
      $popup.remove();
    }
    return false;
  });
  
});




