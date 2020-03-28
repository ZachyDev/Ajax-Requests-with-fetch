// create an ajax request
let request = new XMLHttpRequest();
request.open('GET','https://hplussport.com/api/products');

request.onload = function(){
    let response = request.response;
    let parsedData = JSON.parse(response);
    // console.log(parsedData);
    // create a loop to iterate through the names and the images
    parsedData.forEach(function(item){
        let names = item.name;
        let imgUrl = item.image;
        // create html elements
        let list = document.createElement('li');
        list.innerHTML += name;
        document.body.appendChild(list);
        // create image tag
        let image = document.createElement('img');
        image.setAttribute('src',imgUrl);
        document.body.appendChild(image);
    })
}
request.send();