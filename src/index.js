fetch('indexJSON.json').then(response =>
    {
        response.json().then(result => {document.body.style.backgroundImage = `url(${result.backgroundImage})`;})
    }
);