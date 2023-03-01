function loadData2()
{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data =>console.log(data));
}

function loadUser()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>displayUser(data))
}

function displayUser(data)
{
    for(const user of data)
    {
        // console.log(user.name, user.email, user.phone);
        // console.log(user);
        console.log(user.name);
    }
}