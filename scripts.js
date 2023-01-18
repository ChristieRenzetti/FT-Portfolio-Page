

function fetchData () {
    return fetch(`https://api.github.com/users/christierenzetti`)
    .then((response) => response.json())
    .then((data) => githubData(data));
}

    fetchData();

