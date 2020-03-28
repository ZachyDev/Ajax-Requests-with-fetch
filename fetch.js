// provide a url to fecth data from
fetchUrl = 'https://hplussport.com/api/products';
// use fetch keyword to fecth data
fetch(fetchUrl)
    .then((response)=>{
        return response.json();     
    })
    .then((data)=>{
        console.log(data);
    })
    .catch(()=>{
        console.log('something went wrong');
    })