// 各要素の取得
const startScreen = document.getElementById('start-screen')
const selectScreen = document.getElementById('select-screen')
const kind1Screen = document.getElementById('kind1-screen')
const kind2Screen = document.getElementById('kind2-screen')
const strict1Screen = document.getElementById('strict1-screen')
const strict2Screen = document.getElementById('strict2-screen')

// 各ボタンの要素の取得
// ・スタートボタン
const startButton = document.getElementById('start-button')
// ・やさしめモード選択
const kindButton = document.getElementById('kind-button')
// ・きびしめボタン選択
const strictButton = document.getElementById('strict-button')
// ・やさしめからselectScreenに戻る
const backToSelect = document.getElementById('back-to-select')
// ・やさしめモードを一回引く
const kindGacha = document.getElementById('kind-gacha')
// ・kind1Screenに戻る
const backToKind = document.getElementById('back-to-kind')
// ・やさしめモードをもう一回引く
const kindGachaMore = document.getElementById('kind-gacha-more')
// ・きびしめからselectScreenに戻る
const backToSelect2 = document.getElementById('back-to-select2')
// ・きびしめモードを一回引く
const strictGacha = document.getElementById('strict-gacha')
// ・strict1Screenに戻る
const backToStrict = document.getElementById('back-to-strict')
// ・きびしめモードをもう一回引く
const strictGachaMore = document.getElementById('strict-gacha-more')

// メッセージを表示
const kindMessage = document.getElementById('kind-message')
const strictMessage = document.getElementById('strict-message')

// 映す画面の設定
function showScreen(screenToShow) {
    startScreen.style.display = 'none';
    selectScreen.style.display = 'none';
    kind1Screen.style.display = 'none';
    kind2Screen.style.display = 'none';
    strict1Screen.style.display = 'none';
    strict2Screen.style.display = 'none';

    screenToShow.style.display = 'block';
}

// メッセージデータ
const kindMessages = [
    "あなたは一人じゃないよ。周りの人に話してみたら？",
    "あなたのがんばりは伝わってるよ。",
    "少しずつでも、必ず明るいは近づいてくるよ。",
    "今はくもりでも、きっと晴れる日が来るから。",
    "がんばれない日があっても悪いことじゃないよ。",
    "あなたのペースで大丈夫。一歩ずつ進もう。",
    "一つ一つのがんばりが、未来を作っているんだよ。",
    "小さな一歩も、大きな変化へのはじまりだよ。",
    "何もできない日だって、ちゃんと意味があるんだよ。",
    "あなたがいるだけで、誰かは助かってるよ。"
]
const strictMessages = [
    "こわくても、進むのをやめたらそこで終わりだよ。",
    "やると決めたなら、最後までやろう。",
    "なまける心をなくせば、もっと強くなれる。",
    "時間は待ってくれない。今ががんばりどきだよ。",
    "できるかどうかより、やるかどうかだよ。",
    "なやんでいる時間で、一歩は進めるよ。",
    "今の自分は、昔の自分の選んだことの結果だよ。",
    "その一歩をやってみるかどうかで、全部変わるよ。",
    "本気なら、結果が出るまでやろう。",
    "時間はどんどん過ぎる。今やらなきゃ後悔するよ。"
]

let nowMessages = []

// 最初の画面を映す
showScreen(startScreen);
// スタートボタンが押された時
startButton.addEventListener('click', () => {
    showScreen(selectScreen);
});
// やさしめモードを選んだ時
kindButton.addEventListener('click', () => {
    showScreen(kind1Screen);
});
// やさしめモードからselectScreenに戻る時
backToSelect.addEventListener('click', () => {
    showScreen(selectScreen);
});
// やさしめモードを一回引く時
kindGacha.addEventListener('click', () => {
    nowMessages = kindMessages;
    showScreen(kind2Screen);
    displayRondomMessage(kindMessage)
});
// やさしめモードからkind1Screenに戻る時
backToKind.addEventListener('click', () => {
    showScreen(kind1Screen);
});
// やさしめモードをもう一回引く時
kindGachaMore.addEventListener('click', () => {
    displayRondomMessage(kindMessage)
});


// きびしめモードを選んだ時
strictButton.addEventListener('click', () => {
    showScreen(strict1Screen);
});
// きびしめモードからselectScreenに戻る時
backToSelect2.addEventListener('click', () => {
    showScreen(selectScreen);
});
// きびしめモードを一回引く時
strictGacha.addEventListener('click', () => {
    nowMessages = strictMessages;
    showScreen(strict2Screen);
    displayRondomMessage(strictMessage)
});
// きびしめモードからkind1Screenに戻る時
backToStrict.addEventListener('click', () => {
    showScreen(strict1Screen);
});
// きびしめモードをもう一回引く時
strictGachaMore.addEventListener('click', () => {
    displayRondomMessage(strictMessage)
});

// メッセージをランダムに表示
function displayRondomMessage(messages) {
    const randomIndex = Math.floor(Math.random() * nowMessages.length)
    messages.textContent = nowMessages[randomIndex]
} 
