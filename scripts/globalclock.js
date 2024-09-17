async function bigFact(){
    const url = 'https://world-clock.p.rapidapi.com/jsonp/cet/utc?callback=callback';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f8f95c0864msh5d1ac343925cac8p13031djsn3e5d3bca437a',
            'X-RapidAPI-Host': 'world-clock.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const headers = response.headers;
        const dateHeaderValue = headers.get('date');

        document.getElementById('factMessage').innerHTML = `Current date (of page loading): ${dateHeaderValue}`;
    } catch (error) {
        console.error(error);
        document.getElementById('factMessage').innerText = "An error occurred while fetching the current date.";
    }
}

bigFact();
