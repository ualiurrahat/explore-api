// Task : show all 100 posts with title,body,id with custom css

function postButton()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data =>loadPosts(data))
}


function loadPosts(data)
{
    const postSection = document.getElementById("post-container");

    for(const post of data)
    {
        const postDiv = document.createElement("div");
        postDiv.classList.add("posts");
        postDiv.innerHTML = `
        <h4>ID: ${post.id}</h4>
        <h5>Post Title: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `
        postSection.appendChild(postDiv);
    }
   
    
}

