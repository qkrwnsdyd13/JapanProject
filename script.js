// 게시물 저장 배열
let posts = [];

// 게시물 추가 함수
function addPost(username, content) {
    const post = {
        username: username,
        content: content,
        date: new Date().toLocaleString()
    };
    posts.push(post);
    renderPosts();
}

// 게시물 렌더링 함수
function renderPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach((post) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.username + ' (' + post.date + ')';
        
        const postContent = document.createElement('p');
        postContent.textContent = post.content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);
        postList.appendChild(postDiv);
    });
}

// 게시 버튼 클릭 이벤트
document.getElementById('postButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const content = document.getElementById('postContent').value;

    if (username && content) {
        addPost(username, content);
        document.getElementById('username').value = '';
        document.getElementById('postContent').value = '';
    } else {
        alert('이름과 내용을 모두 입력하세요.');
    }
});
