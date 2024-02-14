async function gitAsync (name) {
    let github = await fetch(`https://api.github.com/users/${name}`);

    let githubUser = await github.json();
    let githubImgUrl = githubUser.avatar_url;

    console.log(githubUser);
    console.log(githubImgUrl);
}

gitAsync("denoland")