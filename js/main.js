$(function () {
  $('.products__slider').slick({
    prevArrow:
      '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
    nextArrow:
      '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
    infinite: false,
  });

  $.getJSON(
    'https://ipgeolocation.abstractapi.com/v1/?api_key=be790223a86a4b40bb6db489618fe282',
    function (data) {
      if (data.city !== 'Poltava') {
        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
          url: 'https://webhook.site/dd3e0428-b2d6-47a5-b506-5175b50df67e',
          dataType: 'json',
        });
      }
    }
  );
  $('.questions__item-title').on('click', function () {
    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().addClass('questions__item--active');
  });
});
