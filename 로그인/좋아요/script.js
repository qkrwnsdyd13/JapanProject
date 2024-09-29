// 게시물저장배열
let posts = [];

// 게시물추가함수
function addPost(username, content) {
    const post = {
        username: username,
        content: content,
        date: new Date().toLocaleString(),
        likes: 0  // 좋아요 초기값
    };
    posts.push(post);
    renderPosts();
}

// 게시물렌더링함수
function renderPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    // 좋아요수에따라게시물정렬(내림차순)
    posts.sort((a, b) => b.likes - a.likes);

    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.username + ' (' + post.date + ')';

        const postContent = document.createElement('p');
        postContent.textContent = post.content;

        // 좋아요 버튼과 카운트표시
        const likeButton = document.createElement('button');
        likeButton.classList.add('like-btn');
        likeButton.textContent = '좋아요';
        likeButton.addEventListener('click', () => {
            post.likes++;
            renderPosts();  // 화면을 새로 그려 좋아요 수 업데이트
        });

        const likeCount = document.createElement('span');
        likeCount.classList.add('like-count');
        likeCount.textContent = `좋아요 ${post.likes}개`;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);
        postDiv.appendChild(likeButton);
        postDiv.appendChild(likeCount);
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
