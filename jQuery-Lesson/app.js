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
        //     $('.box1').slideUp();
        // })


// アニメーション(要素の表示)
        // $(function () {
        //   $('.box1').show();
        //   $('.box1').css({'background-color': '#0000FF'});
        // })


// アニメーション(要素の非表示)
        // $(function () {
        //     $('.box1').hide();
        // })

// 確認問題
$(function () {
  $('.box1').slideDown();
  $('.box1').css({
    'background-color': '#0000FF',
    'height': '100px',
    'width': '200px'
  })
})