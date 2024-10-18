console.log('linked');
const tilteEl = document.querySelectorAll('.title');
const photoEl = document.querySelectorAll('.card');

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(response => {
        const photos = response.data;
        photos.forEach((photo, i) => {
            const { title, url } = photo;

            photoEl[i].innerHTML = `
                    <div class="card-body d-flex justify-content-center align-items-center">
                        <img src="${url}" alt="">
                    </div>
                    <p class="title">${title}</p>
                `;

        });
    })
    .catch(error => console.error('Errore:', error));
