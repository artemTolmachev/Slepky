// const toggle = document.querySelector('.toggle-menu');

// toggle.addEventListener('click', function(){
//     this.classList.toggle('active');
// });

$(document).ready(function(){
    const toggle = document.querySelector('.toggle-menu'); //иконкагамбургер
    const mobMenu = document.querySelector('.mobile-menu'); //мобильное меню
    const overlay = document.querySelector('.mobile-overlay'); //затемняющий фон при активном мобильном меню
    const nonescroll = document.querySelector('body'); //блокировка скролла при активном моб меню
    const overlayModal = document.querySelector('.modal-overlay');
    const nonescrollSkils = document.querySelector('body');
    toggle.addEventListener('click', function(){
        this.classList.toggle('active');
        mobMenu.classList.toggle('active-menu');
        overlay.classList.toggle('active');
        nonescroll.classList.toggle('nonescroll');
    });
    mobMenu.addEventListener('click', function(){
        this.classList.remove('active-menu');
        toggle.classList.remove('active');
        overlay.classList.remove('active');
        nonescroll.classList.remove('nonescroll');
    });
    overlay.addEventListener('click', function(){
        this.classList.remove('active');
        toggle.classList.remove('active');
        mobMenu.classList.remove('active-menu');
        nonescroll.classList.toggle('nonescroll');
    });

    // advantages
    $('.advantages__toggle').click(function(event){ //скрывает и показывает текст по клику
		event.preventDefault();
		console.log('Click!');

		$('.advantages__list-text').hide();
		var href = $(this).attr('href'); // '#private'

		console.log(href);
		$(href).fadeIn();
	});
    
    $(".advantages__toggle").click(function() {   //active color toggle
        $(".advantages__toggle").removeClass("active-toggle");         
        $(this).toggleClass("active-toggle");
    });
     // advantages

    //  courses
   $('.courses__toggle').click(function(event){ //скрывает и показывает текст по клику
		event.preventDefault();
		console.log('Click!');

		$('.courses__block').hide();
		var href = $(this).attr('href'); // '#private'

		console.log(href);
		$(href).fadeIn();
	});
    
    $(".courses__toggle").click(function() {   //active color toggle
        $(".courses__toggle").removeClass("active-toggle");         
        $(this).toggleClass("active-toggle");
        
    });
    // courses

    // quetions
   
        $(".questions__text").on("click",function(){//по клику показывается текст
            $(this).toggleClass("active");
            $(this).next().slideToggle();
        });


    $(".owl-carousel").owlCarousel({ //карусель
        
        items: 3,
        margin: 20,
        nav: true,
        loop: true,
        navText: ['',''],
        navSpeed:1000,

        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768 :{
                items:3,
                nav:true
            },
        }
});


//  скрытие видео отзывов при < 768
if($(window).width() <768){
    $('.block-hide').toggleClass('hide');   
}
else{
    
$('.all-video').toggleClass('hide');  

} 

$('.all-video').click(function(){     //смена ссылок "скрыть" "показать видео"
    if($('.all-video').hasClass('first')){
        $('.all-video').text('Скрыть');
        $('.all-video').removeClass('first');
        $('.all-video').addClass('second');
    }
    else{
        $('.all-video').text('Смотреть все видео');
        $('.all-video').removeClass('second');
        $('.all-video').addClass('first'); 
    }
});

$('.all-video').click(function(){     //скрыть и показать видео 
    if($('.block-hide').hasClass('hide')){  
    $('.block-hide').removeClass('hide');
}
    else{

        $('.block-hide').toggleClass('hide'); 
    }
});


    //  скрытие мои работы при < 1200
    if($(window).width() <1200){

        $('.card-hide').toggleClass('hide'); 
    }
    else{ 

    $('.all-projects').toggleClass('hide'); 
    } 

    $('.all-projects').click(function(){     //скрыть и показать мои работы  + смена ссылок "скрыть" "показать все работы"
        if($('.all-projects').hasClass('first')){
            $('.all-projects').text('Скрыть');
            $('.all-projects').removeClass('first');
            $('.all-projects').addClass('second');
        }
        else{
            $('.all-projects').text('Смотреть все работы');
            $('.all-projects').removeClass('second');
            $('.all-projects').addClass('first'); 
        }

    });

    $('.all-projects').click(function(){     //скрыть и показать мои работы  
        if($('.card-hide').hasClass('hide')){  
        $('.card-hide').removeClass('hide');
    }
        else{
    
            $('.card-hide').toggleClass('hide'); 
        }
    });

        $('#back-top').hide(); //стрелка скролл вверх , показать и скрыть при скролле страницы
    $(window).scroll(function(){
    if($(this).scrollTop() > 300 ){
    $('#back-top').fadeIn();
    }
    else{
    $('#back-top').fadeOut();
    }
    }); 

//модальное окно
    $('.btn-js').click(function(){
        overlayModal.classList.toggle('active');
        $('.popup-js').fadeIn();
        console.log('2');
    });

    $('.btn-back').click(function(){
        overlayModal.classList.remove('active');
        $('.popup-js').fadeOut();

    });
    overlayModal.addEventListener('click', function(){
        this.classList.remove('active'); 
        $('.popup-js').fadeOut();
    });




    $('.courses-btn-js').click(function(){
        overlayModal.classList.toggle('active');
        $('.popup-js-modal').fadeIn();

    });

    $('.btn-back').click(function(){
        overlayModal.classList.remove('active');
        $('.popup-js-modal').fadeOut();

    });
    overlayModal.addEventListener('click', function(){
        this.classList.remove('active'); 
        $('.popup-js-modal').fadeOut();
    });
});


