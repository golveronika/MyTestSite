var slideNow = 1; /*Номер текущего слайда*/
var slideCount = $('#slidewrapper').children().length; /*количество этих самых слайдов*/
var translateWidth = 0; /*расстояние, на которое смещается наш slidewrapper*/
var slideInterval = 3000; /*Через какой интервал будем вызывать смещение слайдов*/
var navBtnId = 0; /*Индекс кликнутой карусельной кнопки*/

/*функция, отвечающая за переключение слайдов*/
function nextSlide() {
  $('.slide-nav-btn').eq(slideNow-1).css({"opacity":"0.1"});
  /*если достигли конца слайдов*/
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      /*смещаем слайд в исходное положение(на первый слайд)*/
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
      /*вычмсляем ширину viewport (так как она при изменении размеров экрана меняется)*/
        translateWidth = -$('#viewport').width() * (slideNow);
       /*смещения slidewrapper влево на значение, равное ширине viewport,*/
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        /*скажем нашему slideNow, что мы видим следующий по счету слайд: slideNow++*/
        slideNow++;
    }
    //alert(slideNow);

    $('.slide-nav-btn').eq(slideNow-1).css({"opacity":"1"});
}

/*Функция переключения на предыдущий слайд*/
function prevSlide() {
  $('.slide-nav-btn').eq(slideNow-1).css({"opacity":"0.1"});
  /*Проверяем, что мы не на первом слайде и не на каком-лио неправильном*/
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      /*берем со знаком минус, т.к. смещаем его влево*/
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        /*переместимся на нужное значение*/
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
      /*transform:translate(x,0) нашего slidewrapper уже равна ширине одного слайда*/
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
    $('.slide-nav-btn').eq(slideNow-1).css({"opacity":"1"});
}

$(document).ready(function () {

  /*Автопереключение слайдов*/
    var switchInterval = setInterval(nextSlide, slideInterval);
    //$('.slide-nav-btn').eq(slideNow).css({"opacity":"1"});

    /*Остановка автопрокрутки при наведении курсора*/
    $('#viewport').hover(
      /*что делать при наведении курсова*/
      function(){
          clearInterval(switchInterval);
    },
    /*Что делать после отведа курсора*/
    function() {
        switchInterval = setInterval(nextSlide, slideInterval);
  });

  /*Кнопки вперед-назад*/
	$('#next-btn').click(function() {
		clearInterval(switchInterval);
        nextSlide();
    });
    $('#prev-btn').click(function() {
    	clearInterval(switchInterval);
        prevSlide();
	});

    /*При клике на карусельные кнопки*/
  $('.slide-nav-btn').click(function() {
          navBtnId = $(this).index(); /*присваиваем переменной navBtnId индекс кликнутой кнопки*/
          $('.slide-nav-btn').eq(slideNow-1).css({"opacity":"0.1"});
          /*Так как отсчет слайдов , не с 0, а с 1, прибавляем 1 и сравниваем с номером текущего слада*/
          if (navBtnId + 1 != slideNow) {
            /*вычислим расстояние, на которое нам нужно сдвинуть slidewrapper влево*/
              translateWidth = -$('#viewport').width() * (navBtnId);
              clearInterval(switchInterval);
              $('#slidewrapper').css({
                  'transform': 'translate(' + translateWidth + 'px, 0)',
                  '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                  '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
              });
              slideNow = navBtnId + 1;
          }
          $('.slide-nav-btn').eq(slideNow-1).css({"opacity":"1"});
  });


/*Перелистывание swipe слайдера на телефоне*/
var obj = document.getElementById("slidewrapper");

  var initialPoint;
  var finalPoint;
  obj.addEventListener('touchstart', function(event) {
  initialPoint=event.changedTouches[0];
  }, false);


  obj.addEventListener('touchend', function(event) {
  finalPoint=event.changedTouches[0];
  var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);


  if (finalPoint.pageX < initialPoint.pageX){
    /*СВАЙП Влево*/
    clearInterval(switchInterval);
  nextSlide();}
  else{
    clearInterval(switchInterval);
    prevSlide();
  /*СВАЙП ВПРАВО*/}
  }, false);




});//document
