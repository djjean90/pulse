$(document).ready(function(){
    $('.carousel__inner').slick(
      {
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true,
              arrows: false,
            }
          }
        ]
      });
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });


    function toggleSlide (item) {
      $(item).each(function(i) {
        $(this).on("click", function(e) {
          e.preventDefault();
          $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
          $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");


        });
      });
    };

    toggleSlide(".catalog-item__link");
    toggleSlide(".catalog-item__back");

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay , #consultation').fadeIn();
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut();

    });
    $('.button_mini').on('click',function(){
      $('.overlay , #order').fadeIn();
    });
    $('.button_mini').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay , #order').fadeIn();
      });

    });

    function validateForms(form){
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required:true,
            email:true
          }
        },
        messages: {
          name: "Пожалуйста, введите свое имя",
          phone: "Введите номер телефона",
          email: {
            required: "Пожалуйста, введите свою почту",
            email: "Неправильно введен адрес почты"
          }
        }
      });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');


});