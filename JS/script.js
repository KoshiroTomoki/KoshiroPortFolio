
//始まったとたんにbodyにタグを付与する。（こうしないといけない）
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 450) {
        document.body.style.overflow = "hidden";
    }
});


//スクロールbuttonのクラス付け替え。Scrollのオンオフ
const scrollon = document.getElementById('scrollon');
const scrolloff = document.getElementById('scrolloff');

scrolloff.addEventListener('click', function () {
    document.body.style.overflow = ''; // overflowを空にすることでスタイルを削除
    scrollon.classList.remove('hide');
    scrolloff.classList.add('hide');
});

scrollon.addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    scrollon.classList.add('hide');
    scrolloff.classList.remove('hide');
});



//背景色の変更ボタン
const button = document.getElementById('changeBackground');

button.addEventListener('click', function () {
    const randomColor1 = Math.floor(Math.random() * 256);
    const randomColor2 = Math.floor(Math.random() * 256);
    const randomColor3 = Math.floor(Math.random() * 256);

    document.body.style.transition = 'background 3s ease'; // アニメーションの設定
    document.body.style.background = `linear-gradient(45deg, rgb(${randomColor1}, ${randomColor2}, ${randomColor3}), rgb(${randomColor3}, ${randomColor1}, ${randomColor2}))`;
});



//星・名前が落ちるJavascript
const hovers = document.querySelectorAll('.hover');

hovers.forEach(function (hover) {
    hover.addEventListener('mouseenter', function () {
        hover.classList.add('hovered');
    });
});



//Scroll時にアニメーション
const fadeInTarget = document.querySelectorAll('.fadeInTarget');

function observation() {
    // 各要素に対して処理を繰り返す
    fadeInTarget.forEach(function (target) {
        // 要素の位置情報を取得
        const targetRect = target.getBoundingClientRect();

        // 画面内に入っているかどうかを判定
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            // 画面内に入った場合、クラスを付与
            target.classList.add('animate__fadeIn'); // yourClassNameは付与したいクラス名に置き換えてください
        } else {
            // 画面外に出た場合、クラスを除去
            target.classList.remove('animate__fadeIn');
        }
    });
};
// スクロールイベントを追加
window.addEventListener('scroll', observation);



// revivalButton
// ボタン要素を取得
const revivalButton = document.getElementById('revivalButton');

// ボタンがクリックされた時の処理
revivalButton.addEventListener('click', function () {
    // .hover クラスを持つ要素を取得
    const elementsWithHoverClass = document.querySelectorAll('.hover');

    // 取得した要素から .hovered クラスを持つ要素を探し、クラスを削除する
    elementsWithHoverClass.forEach(element => {
        if (element.classList.contains('hovered')) {
            element.classList.remove('hovered');
        }
    });
});



//Topからスクロールした際、hoveredタグをつける
// ページがスクロールされた時の処理
window.addEventListener('scroll', function () {
    // .hover クラスを持つ要素を取得
    const elementsWithHoverClass = document.querySelectorAll('.hover');

    // 各要素をチェックして、表示されているかどうかを判定し、.hovered クラスを付与する
    elementsWithHoverClass.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('hovered');
        }
    });
});

// 要素がビューポート内にあるかどうかをチェックする関数
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//Topの名前や星の表示が他のページで表示されないように。
document.addEventListener('DOMContentLoaded', function () {
    const hoverOpacity = document.querySelectorAll('.opacity.hover');

    hoverOpacity.forEach(function (hover) {
        setTimeout(function () {
            hover.classList.remove('opacity');
        }, 1000); // 3秒後に.opacityを削除
    });
});




// .topText要素を取得
const topText = document.querySelector('.topText');
// #revivalButton要素を取得
const revivalButton02 = document.querySelector('#revivalButton');

// スクロールイベントを検知して、.topTextの表示状態を制御する
window.addEventListener('scroll', function () {
    // #revivalButtonが画面内に表示されたかどうかを判定
    const revivalButtonPosition = revivalButton02.getBoundingClientRect().top;

    // #revivalButtonが画面外に移動した場合
    if (revivalButtonPosition >= window.innerHeight || revivalButtonPosition <= 0) {
        topText.classList.add('displayNone'); // .displayNoneを追加
    } else {
        topText.classList.remove('displayNone'); // .displayNoneを削除
    }
});



//TopのtopTxtを消すJavaScript
window.addEventListener('scroll', function () {
    const revivalButton = document.getElementById('revivalButton');
    const hoveredElements = document.querySelectorAll('.hovered');

    // #revivalButtonが画面内に現れたかどうかをチェック
    const buttonPosition = revivalButton.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (buttonPosition < windowHeight) {
        hoveredElements.forEach(function (element) {
            if (element.classList.contains('hover')) {
                element.classList.remove('hovered');
            }
        });
    }
});



//ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggleButton');
    const drawerMenu = document.getElementById('drawerMenu');

    // トグルボタンをクリックした際の処理
    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation(); // クリックイベントが親要素に伝播しないようにします
        drawerMenu.classList.toggle('open');
        toggleButton.classList.toggle('close');
    });

    // ドキュメント内のアンカーリンクを取得します
    const anchorLinks = document.querySelectorAll('a');
    for (let i = 0; i < anchorLinks.length; i++) {
        // アンカーリンクがクリックされた際の処理
        anchorLinks[i].addEventListener('click', function () {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        });
    }

    // ドキュメント内をクリックした際の処理
    document.addEventListener('click', function (event) {
        const targetElement = event.target;

        // ドロワーメニューが開いている場合に限り、ドロワーメニュー外をクリックで閉じます
        if (drawerMenu.classList.contains('open') && !drawerMenu.contains(targetElement) && targetElement !== toggleButton) {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        }
    });
});


new LuminousGallery(
    document.querySelectorAll(".luminous"),
    {
        arrowNavigation: true
    }
    ,
    {
        caption: function (trigger) {
            return trigger.querySelector("img").getAttribute("alt");
        }
    }
);
