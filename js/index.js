const form = document.getElementById('github-form');
const userList = document.getElementById('user-list');
const userRepoList = document.getElementById('repos-list');

addEventListener("submit", function(event){
    event.preventDefault();
    const searchText = document.getElementById("search").value;
    


    fetch(`https://api.github.com/search/users?q=${searchText}`)
    .then(response => response.json())
    .then(data => {
        data.items.forEach(user =>{
            const userLi = document.createElement('li');
            const userAvatar = document.createElement('img');
            const userLink = document.createElement('a');

            userLi.textContent = user.login;
            userAvatar.src = user.avatar_url;
            userLink.textContent = user.html_url;

            userLi.appendChild(userAvatar);
            userLi.appendChild(userLink);
            userList.appendChild(userLi);


userAvatar.addEventListener("click", function(){
    console.log('Avatar has been clicked!')

    fetch(`https://api.github.com/users/${user.login}/repos`)
    .then(response => response.json())
    .then(repos => {
        const userRepoList = document.getElementById('repos-list');
        
        repos.forEach(repo => {
            const repolist = document.createElement('li');
            repolist.textContent = repo.name;
            userRepoList.appendChild(repolist);
        });
        
        // userLi.appendChild(userRepoList);
        });
    });
        });
    });
});


