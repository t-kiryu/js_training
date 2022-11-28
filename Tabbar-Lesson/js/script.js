// タブ押下時のテキスト等表示

$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $('#tab-contents .tab').hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
})



// 3行目
    // 特定の属性を持つ要素や属性値の絞り込み可能 => $('要素[属性]')
    // 属性値が特定の値に等しい要素だけを取得 => $('要素[属性 = "値"]')
    // 属性値が特定の値に等しくない要素だけを取得 => $('要素[属性 != "値"]')
    // .hide() => 特定のhtmlを非表示する


// 6行目
    // タブをクリックしたら非表示

// 7行目
    // id="tab-contents"内のいずれかのタブがクリックされた時、そのタブ内コンテンツを非表示
    // .remeveClass() => html要素からclassを削除(activeを削除対象にしている)
    // style.css内に#tab-menu .activeを記載しており、activeの時は色が変わるようにしていて、タブ切替時にclassを削除したい
    //

// 8行目
    // .addClass() => html要素にclass属性を追加可能
    // ("active")を追加対象にしており、$(this)=タブクリック時にactiveを追加する

// 9行目
    // .attr() => html要素の属性を取得可能(href属性を取得している)
    // .show() => 要素表示が可能で、取得したhref属性の中身を表示
    // $(this)の時 = タブクリック時に表示