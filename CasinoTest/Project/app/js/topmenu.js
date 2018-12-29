//Логика для меню выбора языка
  //То, что сейчас выбрано
  var langmenu = $("#lang > ul > li > a");
  //Показываем выпадающее меню
  langmenu.hover(function(){
    $(this).find("~ ul").stop().show();
  });
  //Скрываем выпадающее меню
    langmenu.find("~ ul").mouseleave(function(){
      $(this).stop().hide();
    });
  //Меняем язык (как будто)
    $("#lang > ul > li > ul > li > a").click(function(){
      var newleng = $(this).text();
      var newlangimg = $(this).css('background-image');
      var oldlangimg = langmenu.css('background-image');
      $(this).text(langmenu.text());
      $(this).css('background-image',oldlangimg);
      langmenu.text(newleng);
      langmenu.css('background-image',newlangimg);
    });

//Изменение меню для мобильных устройств
 function checkSize(){
     if ($(window).width() <= 744)  {
       $(".content:has(#topmenulogo)").hide();
       $(".content:has(#topmenu)").hide();
       $(".content:has(#mobilemenu)").show();
     }
     else {
       $(".content:has(#mobilemenu)").hide();
       $(".content:has(#topmenulogo)").show();
       $(".content:has(#topmenu)").show();
     }}
  $(document).ready(function(){checkSize()});
  $(window).resize(function(){checkSize()});

//Управление мобильным меню
  $(document).ready(function(){
    $("#mobilemenu .upmenu > a.gamburger").bind("click",function(){
      $("#mobilemenu .downmenu .menumain").slideToggle();
    });
    $("#mobilemenu .upmenu > a.user").bind("click",function(){
      $("#mobilemenu .downmenu .menuregist").slideToggle();
    });
    $("#mobilemenu .upmenu > a.patron").bind("click",function(){
      var img = $("#mobilemenu .upmenu > a.patron > img");
      if (img.attr("alt") == 'ru') {
        img.attr("alt","en");
        img.attr("src","img/1_topmenu/us flag.png");
      } else {
        img.attr("alt","ru");
        img.attr("src","img/1_topmenu/ru flag.png");
      }
    });
  });//document
