// オプション指定してSkippr実行
$(".theTarget").skippr({

  // スライドショーの変化("fade(フェード)" or "slide")
  transition : 'fade',

  // 変化時間(ミリ秒)
  speed : 1000,

  // easing種類(easing => エフェクトの動きを加速/減速させる関数)
  easing : 'easeOutQuart',

  // ナビゲーションの形("block" or "bubble")
  navType : 'block',

  // 子要素の種類("div" or "img")
  childrenElementType : 'div',

  // ナビゲーション矢印表示(trueで表示)
  arrows : true,

  // スライドショー自動再生(falseで自動再生なし)
  autoPlay : true,

  // 自動再生時のスライド切替間隔(ミリ秒)
  autoPlayDuration : 5000,

  // キーボード矢印キーでスライド送り設定(trueで有効)
  keyboardOnAlways : true,

  // 1枚目スライド表示時に戻る矢印を表示([false]:矢印表示, [true]:矢印隠す)
  hidePrevious : false
});