console.log('linked');


const tilteEL = document.querySelectorAll('.title');

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(response => {
     
    })
    .catch(error => console.error('Errore:', error));