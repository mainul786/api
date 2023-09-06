function showPostData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(posts){
    const postList = document.getElementById('postList');
for(const post of posts){
    console.log(post)
    const li = document.createElement('li');
    li.classList.add('pos');
    li.innerText = post.title;
    postList.appendChild(li);
}
}

showPostData();