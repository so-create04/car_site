document.addEventListener("DOMContentLoaded", function() {
    var mainImage = document.getElementById("mainImage");
    setTimeout(function() {
        mainImage.style.opacity = 1;
    }, 2700);

    window.addEventListener("scroll", function() {
        const scroll = window.scrollY;
        const windowHeight = window.innerHeight;

        const subtitles = document.querySelectorAll(".container__subtitle");
        subtitles.forEach(function(subtitle) {
            const distanceToSubtitle = subtitle.offsetTop;
            if(scroll + windowHeight > distanceToSubtitle) {
                subtitle.classList.add("is-active");
            }
        });

        const texts = document.querySelectorAll(".container__text");
        texts.forEach(function(text) {
            const distanceToText = text.offsetTop;
            if(scroll + windowHeight > distanceToText) {
                text.classList.add("is-active");
            }
        });
    });

});

$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        slidesToShow: 1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
        dots: true,//下部ドットナビゲーションの表示
        responsive: [
            {
                breakpoint: 769,//モニターの横幅が769px以下の見せ方
                settings: {
                    slidesToShow: 1,//スライドを画面に1枚見せる
                    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
                }
            },
            {
                breakpoint: 426,//モニターの横幅が426px以下の見せ方
                settings: {
                    slidesToShow: 1,//スライドを画面に1枚見せる
                    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
                }
            }
        ]
    });
});
