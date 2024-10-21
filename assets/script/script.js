console.log('linked');
const tilteEl = document.querySelectorAll('.title');
const photoEl = document.querySelectorAll('.card');
const modalEl = document.querySelectorAll('.modal')

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(response => {
        const photos = response.data;
        photos.forEach((photo, i) => {
            const { title, url } = photo;

            photoEl[i].innerHTML = `
                    <div class="card-body d-flex justify-content-center align-items-start">
                        <img src="${url}" alt="">
                    </div>
                    <p class="title">${title}</p>
                `;

            photoEl.forEach(photo => {
                photo.addEventListener("click", () => {
                    document.body.innerHTML +=
                        `
            <div class="modal d-flex justify-content-center align-items-end">
                <div>
                    <div><img src="${url}" alt="foto"></div>
                    <button type="button" class="btn btn-primary my-5">
                        button
                    </button>
                </div>
            </div>
    
            `;
                });
            });
        });
    })
    .catch(error => console.error('Errore:', error));

