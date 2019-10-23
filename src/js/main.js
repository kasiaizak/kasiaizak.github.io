"use strict";

if (document.body.classList.contains('landingpage-nord')) {
  console.log('ladingpage-nord');
  var slideShow = $('.slide-show');
  var slideCount = $('.single-slide').length;
  var slideHeight = 100 / slideCount;
  var slideIndex = 0;

  // ustawiam dynamiczną szerokość kontenera ze slajdami, zależną od ilości slajdów
  slideShow.css({
      height: slideCount + '00%'
  });

  // ustawienie szerokości i pozycjonowanie wewnętrznych kontenerów
  slideShow.find('.single-slide').each(function (index) {
      $(this).css({
          height: slideHeight + '%',
          top: slideHeight * index + '%'
      });
  });

  // przypisywanie zdarzeń do przycisków nawigacji
  $('.next-slide').on('click', function () {
      //console.log('klik naprzód');
      slide(slideIndex + 1);
  });

  $('.prev-slide').on('click', function () {
      //console.log('klik wstecz');
      slide(slideIndex - 1);
  });

  // funkcja przesuwająca slajdy
  function slide(newSlideIndex) {
      if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
          return;
      }

      var slideCaption = $('.slide-caption').eq(newSlideIndex);
      var Top = newSlideIndex * -100 + '%';

      slideCaption.hide();

      slideShow.animate({
              'top': Top
          },
          800,
          function () {
              slideIndex = newSlideIndex;
              slideCaption.fadeIn();
          }
      );
  };
}