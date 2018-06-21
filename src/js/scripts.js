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
          zoom: 13,
          controls: []
      });
      placemark=new ymaps.Placemark(
        [59.670684, 29.903532],
        {
          balloonContent:"Производство",
          balloonContentHeader:"Производство",
          balloonContentBody:"п.Терволово, ул. Ленинградская, д. 15"
        },
        { 
          
          
          iconLayout: 'default#image',
          iconImageHref: 'img/icon-pin-map.png',
          iconImageSize: [40, 51]
        
        });

      
      map.geoObjects.add(placemark);
    }); 
  }
});