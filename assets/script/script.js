console.log('linked');


const tilteEl = document.querySelector('.title');
const photoEl = document.querySelector('.photo');

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(response => {
        const photo = response.data
        console.log(photo);
        let photo_element = ''
        photo.forEach(photo => {
            const { albumId, title, url, thumbnailUrl } = photo

            const markup = `
            <div class="photo card-body d-flex justify-content-center align-items-center">
                            <img src="${thumbnailUrl}" alt="">
                        </div>
                        <p>${title}</p>
            `
            photo_element += markup
        })

        photoEl.innerHTML = photo_element

    })
    .catch(error => console.error('Errore:', error));
    