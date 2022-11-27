// アイコン押下時のメニュー表示
$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
})


// 3行目
    // menu-triggerクリック時にメニューが開くイベント発生

// 4行目
    // (this) => menu-trigger内にあるクリックされた要素(メニューアイコン)
    // .toggleClass() => class属性切替
    // 該当class属性あり:class削除, 該当class属性なし:class追加
    // html内にはないがcss内にあり、ボタン押下時に切り替わる仕組み

// 5行目
    // .fadeToggle() => メニュー開閉時にフェードイン、フェードアウト