$(function() {
  $('#back a').on('click', function(event) {
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
})


//2行目
    // back(id名)内のaタグ(要素)をクリックしたらイベント発生
    // (event)引数 => (e)でも可

//3行目
    // セレクタ名を指定(body, html)
    // animate => アニメーション効果の設定関数

//4行目
   // スクロール位置取得(最上層のためtopを指定)

//5行目
    // スクロール時間指定(800ミリ秒 = 0.8秒)
    // slow, normal, fastでも可

//6行目
    // aタグの機能無効化