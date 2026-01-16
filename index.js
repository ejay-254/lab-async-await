// Write your code here!
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(posts => displayPosts(posts));

function displayPosts(posts) {
  const ul = document.getElementById("post-list");

  for (let post of posts) {
    const li = document.createElement("li");
    li.innerHTML = `<h1>${post.title}</h1><p>${post.body}</p>`;
    ul.appendChild(li);
  }
}