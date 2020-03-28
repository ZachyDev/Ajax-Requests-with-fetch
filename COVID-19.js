    let button = document.getElementById('find');
    button.addEventListener('click',(event)=>{
        event.preventDefault();
        let country = document.getElementById('country').value; 
        // this is the ajax fetch request to COVID-19 api
            
            fetch(`https://covid-19-data.p.rapidapi.com/country?format=json&name=${country}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                    "x-rapidapi-key": "6a7f8e0053mshb9abe890d64e508p192e05jsn7b2ee60ecc40"
                }
            })
                .then((response) => {
                    return response.json();
                })
                .then((data)=>{
                    let countryName = data[0].country;
                    let confirmedCases = data[0].confirmed;
                    let recoveredCases = data[0].recovered;
                    let deathCases = data[0].deaths;
                    document.write(countryName)
                    
                })
                .catch(err => {
                    console.log(err)
                    
                });

                
            
    })
 

    