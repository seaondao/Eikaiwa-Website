// ページロード時にフェードインテキストを再度トリガーする場合
document.addEventListener('DOMContentLoaded', () => {
    const fadeInText = document.querySelector('.fade-in-text');
    fadeInText.classList.add('visible');
});
