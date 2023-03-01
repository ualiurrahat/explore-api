// task: create a button Load User 2 ,
// if it is clicked fetch all the name from a server url

function loadUser2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUserData2(data))
}

// function to display user name data as a list when clicked button "load user 2"
function displayUserData2(data) {
    const ul = document.getElementById("user-ul");
    // traverse the data array 
    for (const user of data) {
        const li = document.createElement("li");
        li.innerText = user.name;
        ul.appendChild(li);
    }


}