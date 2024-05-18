
const offElement = document.querySelector('.off');
const onElement = document.querySelector('.on');
const body = document.querySelector('body');
const main = document.querySelector('main');
const service = document.getElementById('service');
const works = document.getElementById('works');

// クラスの切り替えを行う関数
function toggleClass(elementToAdd, elementToRemove, overflowValue) {
    elementToAdd.classList.add('action');
    elementToRemove.classList.remove('action');
    body.style.overflow = overflowValue;
    main.style.overflow = overflowValue;
    service.style.overflow = overflowValue;
    works.style.overflow = overflowValue;
}

// ウィンドウの幅が780px以下の場合にoverflowをautoにする関数
function setOverflow() {
    if (window.innerWidth <= 780) {
        main.style.overflow = 'auto';
        service.style.overflow = 'auto';
        works.style.overflow = 'auto';
    } else {
        main.style.overflow = 'hidden';
        service.style.overflow = 'hidden';
        works.style.overflow = 'hidden';
    }
}

// off要素がクリックされたときの処理
offElement.addEventListener('click', () => toggleClass(offElement, onElement, 'auto'));

// on要素がクリックされたときの処理
onElement.addEventListener('click', () => toggleClass(onElement, offElement, 'hidden'));

// ウィンドウのリサイズ時にoverflowを設定し直す
window.addEventListener('resize', setOverflow);

// 初期化時にoverflowを設定する
setOverflow();

// スムーズスクロールの処理
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});