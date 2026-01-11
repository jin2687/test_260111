// DOM要素の取得
const dice = document.getElementById('dice');
const diceFace = dice.querySelector('.dice-face');
const rollButton = document.getElementById('rollButton');
const result = document.getElementById('result');

// サイコロの目を表示する関数
function displayDiceNumber(number) {
    const diceSymbols = {
        1: '⚀',
        2: '⚁',
        3: '⚂',
        4: '⚃',
        5: '⚄',
        6: '⚅'
    };

    diceFace.textContent = diceSymbols[number];
}

// サイコロを振る関数
function rollDice() {
    // ボタンを無効化
    rollButton.disabled = true;
    result.textContent = '';

    // アニメーション開始
    dice.classList.add('rolling');

    // ランダムな数字を生成 (1-6)
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // アニメーション中は「?」を表示
    diceFace.textContent = '?';

    // アニメーション終了後に結果を表示
    setTimeout(() => {
        dice.classList.remove('rolling');
        displayDiceNumber(randomNumber);
        result.textContent = `結果: ${randomNumber}`;
        rollButton.disabled = false;
    }, 600);
}

// ボタンクリックイベント
rollButton.addEventListener('click', rollDice);

// 初期表示
diceFace.textContent = '?';
