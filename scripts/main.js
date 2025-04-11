document.addEventListener('DOMContentLoaded', function() {
    // ブログのインタラクティブな機能をここに追加します

    // 例: ボタンがクリックされたときのイベントリスナー
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('ボタンがクリックされました！');
        });
    }

    // 例: 動的にコンテンツを追加する関数
    function addPost(title, content) {
        const postContainer = document.getElementById('postContainer');
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
        postContainer.appendChild(post);
    }

    // 例: 初期投稿を追加
    addPost('初めての投稿', 'これは私のブログの最初の投稿です。');
});