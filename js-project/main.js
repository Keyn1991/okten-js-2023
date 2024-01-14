document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            users.forEach(user => {
                const userDiv = document.createElement('div');
                const detailsButton = document.createElement('button');

                userDiv.innerHTML = `
                    <p>ID: ${user.id}</p>
                    <p>Name: ${user.name}</p>
                `;

                detailsButton.textContent = 'View Details';
                detailsButton.onclick = function() {
                    window.location.href = `user-details/user-details.html?userId=${user.id}`;
                };

                userDiv.appendChild(detailsButton);
                userList.appendChild(userDiv);
            });
        });
});