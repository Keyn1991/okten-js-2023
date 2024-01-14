document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const userDetails = document.getElementById('user-details');

            const userInfoString = `
                ID: ${user.id}
                Name: ${user.name}
                Username: ${user.username}
                Email: ${user.email}
                Phone: ${user.phone}
                Website: ${user.website}
            `;

            userDetails.innerText = userInfoString;

            const backButton = document.createElement('button');
            backButton.textContent = 'Back';
            backButton.addEventListener('click', function() {
                window.location.href = '../index.html';
            });
            userDetails.appendChild(backButton);
        });

    document.getElementById('load-posts').addEventListener('click', function() {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
                const postsContainer = document.getElementById('posts');
                postsContainer.innerHTML = '';
                posts.forEach(post => {
                    const postDiv = document.createElement('div');
                    postDiv.innerHTML = `
                        <p>Title: ${post.title}</p>
           <a href="../post-details/post-details.html?postId=${post.id}">View Post Details</a>
                    `;
                    postsContainer.appendChild(postDiv);
                });
            });
    });
});
