
const avatarURL = document.getElementById('avatarURL')
const avatarBio = document.getElementById('avatarBio')

githubApiData();

function githubApiData() {
    fetch('https://api.github.com/users/christierenzetti')    
        .then(response => response.json())
        .then(response => {
            avatarBio.innerHTML = response.bio
            avatarURL.setAttribute("src", response.avatar_url)
        }) }
