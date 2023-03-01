// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// note : .json() is not similar but close to JSON.parse() 
/*
fetch is a function which calls an api
if the api is found then we set a response
the response from the api is then given a json promise
by calling .json() function
then we say if we got the json , use it
 */

// many other ways to use above fetch function
// way 1 
// const url = const url = 'https://jsonplaceholder.typicode.com/todos/1';;
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

// way 2
function loadData()
{
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(response => response.json())
    .then(json =>console.log(json))
}


