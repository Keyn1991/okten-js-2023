document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('postId');

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            const postDetails = document.getElementById('post-details');

            const postInfoString = `
                ID: ${post.id}
                Title: ${post.title}
                Body: ${post.body}
                UserId: ${post.userId}
            `;

            postDetails.innerText = postInfoString;

            const backButton = document.createElement('button');
            backButton.textContent = 'Back';

            backButton.addEventListener('click', function() {
                window.location.href = '../user-details/user-details.html';
            });

            postDetails.appendChild(backButton);
        });

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            const commentsContainer = document.getElementById('comments');
            comments.forEach(comment => {
                const commentInfoString = `
                    Name: ${comment.name}
                    Email: ${comment.email}
                    Body: ${comment.body}
                `;

                const commentDiv = document.createElement('div');
                commentDiv.innerText = commentInfoString;
                commentsContainer.appendChild(commentDiv);
            });
        });
});
