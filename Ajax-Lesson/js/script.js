const API_KEY = "d1719b67b7cc884e114593e861ba08e6";

$(function() {
  $('#btn').on('click', function() {
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      datatype : 'jsonp',
    }).done(function(data) {
      $('#place').text(data.name);
      $('#temp_max').text(data.main.temp_max);
      $('#temp_min').text(data.main.temp_min);
      $('#humidity').text(data.main.humdity);
      $('#speed').text(data.wind.speed)
      $('.img').attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('.img').attr("alt", data.weather[0].main);
    }).fail(function(data) {
      alert('通信に失敗しました');
    });
  });
})



// 5行目
    // $.ajax() => Ajax実装メソッドでオプション設定可能(6,7行目参照)

// 6行目
    // url => APIリクエストするURLを記述
    // 今回は"http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid="取得したAPI" "を指定

    // $('#cityname').val() => citynameの値を受取り、URLを結合(.val()はHTMLのvalue属性取得メソッド)

// 7行目
    // レスポンスで取得したいデータ型を指定(JSONで受け取りたいので "datatype : jsonp"

// 8～15行目
    // 通信成功時の処理の
    // $('#id名').text(JSONから欲しい値)の形で指定すると、指定idのテキストをJSONから受け取った値に変換)

// 14行目
    // $(要素名).attr(属性名,値); => img要素にsrc属性とalt属性が追加
    // "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png" => アイコン取得URL