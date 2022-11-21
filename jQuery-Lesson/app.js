// jQueryの基本記述
    // HTML読込後にjQueryが実行されるよう記述
        // $(document).ready(function () {
        //   $('body').html('<h1>Hello jQuery!!</h1>');
        // });

    // 省略形
        // $(function () {
        //   $('body').html('<h1>Hello jQuery!!</h1>');
        // });


// div要素のスタイル変更
    // 複数のcss記述の場合
        // $(function () {
        //   $('.box1').css({
        //     'background-color': '#0000FF',
        //     'height': '100px'
        //   })
        // })

    // 1つのcss記述の場合
        // $('.box1').css('background-color', '#0000FF');


// アニメーション(上から下へスライド)
        // $(function () {
        //   $('.box1').slideDown();
        // })


// アニメーション(下から上へスライド)
        // $(function () {
        //   $('.box1').slideUp();
        // })


// アニメーション(要素の表示)
        // $(function () {
        //   $('.box1').show();
        //   $('.box1').css({'background-color': '#0000FF'});
        // })


// アニメーション(要素の非表示)
        // $(function () {
        //   $('.box1').hide();
        // })


// 確認問題(自分)
        // $(function () {
        //   $('.box1').slideDown();
        //   $('.box1').css({
        //     'background-color': '#0000FF',
        //     'height': '100px',
        //     'width': '200px'
        //   })
        //   $('.box1').slideUp();
        // })


// 確認問題(解答)
    // slideDownにfunctionを加えられ、アニメーション後にfunctionが機能する
        // $(function () {
        //   $('.box1').slideDown(function() {
        //     $('.box1').css({
        //         'background-color': '#0000FF',
        //         'width': '200px',
        //         'height': '100px'
        //     }).slideUp();
        //   });
        // })


// アニメーション(マウスオーバー・アウト)
    // マウスオーバー時のcss定義を利用
        // $(function (){
        //   $('.box1').mouseover(function () {
        //     $('.box1').addClass('box1-ext');
        //   });
        //   $('.box1').mouseout(function () {
        //     $('.box1').removeClass('box1-ext');
        //   });
        // })


// アニメーション(クリック)
    // クリック後に複数イベント発生
        // $(function() {
        //   $('.box1').on('click', function() {
        //     $('.box1').addClass('box1-ext');
        //   });
        //   $('.box1').mouseout(function() {
        //     $('.box1').removeClass('box1-ext');
        //   });
        // })
