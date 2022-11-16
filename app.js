// 変数の書き方
    // let hello = 'Hello World';
    // alert(hello);


// 変数に数値、文字列を代入
    // let int1 = 1;
    // let float1 = 3.14;
    // let str1 = 'JavaScriptを覚えよう';


// 四則演算
    // alert(4 + 3);
    // alert(8 - 5);
    // alert(2 * 6);
    // alert(10 / 2);


// 文字列の結合
    // let str1 = 'Hello';
    // let str2 = 'World!!';
    // alert(str1 + str2);


// 条件分岐(if文)
    // let orange = 100;
    // let apple = 120;

    // if(orange < apple){
    //   alert('みかんの値段がりんごより安い');
    // }else if(orange == apple){
    //   alert('みかんとりんごが同じ値段');
    // }else{
    //   alert('みかんの値段がりんごより高い');
    // }


// 繰り返し処理(while文, for文)
  // while文 => trueの場合、無制限に繰返し
      // let max = 100;
      // let num = 1;
      // let count = 0;

      // while(num < max){
      //   num = num * 2;
      //   count = count + 1;
      // }

      // alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + 'です')


  // do...while文 => 最初の1回目は処理、2回目以降は条件式を評価


  // for文 => 決められた回数の処理繰返し(初期値、条件達成の記載必須)
      // let i;
      // let num = 0;

      // for(i = 1; i < 11; i++){
      //   num = num + i;
      // }

      // alert('1から10まで足し算した結果は' + num + 'です');


// 関数(function)
      // let alertString;
      // alertString = addString("webcamp");

      // alert(alertString);

      // function addString(strA){
      //   let addStr = "Hello " + strA;
      //   return addStr;
      // }


// 複数関数で表示
  // 入力ダイアログ
      // let promptStr = prompt('何か好きな文字を入力してください。');
      // alert(promptStr);


  // 複数の関数定義(じゃんけん)
      let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
      while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
        alert("グー・チョキ・パーのいずれかを入力してください");
        user_hand = prompt('じゃんけんの手をグー・チョキ・パーから選んでください。')
      }
      let js_hand = getJShand();
      let judge = winLose(user_hand, js_hand);

      if(user_hand != null){
        alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。 \n結果は' + judge + 'です。');
      } else {
        alert('またチャレンジしてね')
      }
      function getJShand(){
        let js_hand_num = Math.floor( Math.random() * 3);
        let hand_name;

        if(js_hand_num == 0){
          hand_name = "グー";
        } else if(js_hand_num == 1){
          hand_name = "チョキ";
        } else if(js_hand_num == 2){
          hand_name = "パー";
        }
        return hand_name
      }

      function winLose(user, js){
        let winLoseStr;

        if(user == "グー"){
          if(js == "グー"){
            winLoseStr = "あいこ";
          } else if(js == "チョキ"){
            winLoseStr = "勝ち";
          } else if(js == "パー"){
            winLoseStr = "負け";
          }
        } else if(user == "チョキ"){
          if(js == "グー"){
            winLoseStr = "負け";
          } else if(js == "チョキ"){
            winLoseStr = "あいこ";
          } else if(js == "パー"){
            winLoseStr = "勝ち";
          }
        } else if(user == "パー"){
          if(js == "グー"){
            winLoseStr = "勝ち";
          } else if(js == "チョキ"){
            winLoseStr = "負け";
          } else if(js == "パー"){
            winLoseStr = "あいこ";
          }
        }
        return winLoseStr;
      }