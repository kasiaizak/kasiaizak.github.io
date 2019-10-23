"use strict";

if (document.body.classList.contains('landingpage-nord')) {
  console.log('ladingpage-nord');
  const slideShow = $('.slide-show');
  const slideCount = $('.single-slide').length;
  let slideHeight = 100 / slideCount;
  let slideIndex = 0;

  // ustawiam dynamiczną szerokość kontenera ze slajdami, zależną od ilości slajdów
  slideShow.css({
    height: slideCount + '00%'
  });

  // ustawienie szerokości i pozycjonowanie wewnętrznych kontenerów
  slideShow.find('.single-slide').each( (index) => {
    $(this).css({
      height: slideHeight + '%',
      top: slideHeight * index + '%'
    });
  });

  // przypisywanie zdarzeń do przycisków nawigacji
  $('.next-slide').on('click', () => {
    //console.log('klik naprzód');
    slide(slideIndex + 1);
  });

  $('.prev-slide').on('click', () => {
    //console.log('klik wstecz');
    slide(slideIndex - 1);
  });

  // funkcja przesuwająca slajdy
  const slide = (newSlideIndex) => {
    if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
      return;
    }

    const slideCaption = $('.slide-caption').eq(newSlideIndex);
    const Top = newSlideIndex * -100 + '%';

    slideCaption.hide();

    slideShow.animate(
      {
        'top': Top
      },
      800,
      () => {
        slideIndex = newSlideIndex;
        slideCaption.fadeIn();
      }
    );
  };
}

if (document.body.classList.contains('mdbootstrap-todolist')) {
  console.log('mdbootstrap-todolist');
  let position = 1;

  $('#add').on('click', () => {
    $('ul').append($(`<li class="list-group-item">Task number ${position}</li>`));
    position = position + 1;
  })

  $('#remove').on('click', () => {
    $('li:last').remove();
    position = position - 1;
  })

  $('#deleteAll').on('click', () => {
    $('ul').empty();
    position = 1;
  })
}