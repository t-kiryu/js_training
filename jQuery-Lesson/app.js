// index_ch2.htmlで利用開始
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

// index_3.htmlで利用開始
// 操作対象指定(this)
    // これまでの方法
        // $(function() {
        //   $('.bg1').on('click', function() {
        //     $('.bg1').slideUp();
        //   });
        //   $('.bg2').on('click', function() {
        //     $('.bg2').slideUp();
        //   });
        //   $('.bg3').on('click', function() {
        //     $('.bg3').slideUp();
        //   });
        //   $('.bg4').on('click', function() {
        //     $('.bg4').slideUp();
        //   });
        // });

    // .box1クラスをクリック時にthis(クリックされた要素)をslideUp
        // $(function() {
        //   $('.box1').on('click', function() {
        //     $(this).slideUp();
        //   });
        // })

    // html対象要素(ul)の子要素(li)に対して関数設定
        // $(function() {
        //   $('button').on('click', function() {
        //     $('ul').children().css('color','red');
        //   });
        // })


