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

        });
        
        photoEl.forEach(photo => {
            photo.addEventListener("click", () => {
    
                const url = photo.getAttribute('data-url');
                document.body.innerHTML +=
                    `
                <div class="modal d-flex justify-content-center align-items-center">
                    <div>
                        <div class=" d-flex flex-column">
                            <img src="${url}" alt="foto">
                        <button type="button" class="close_btn btn btn-primary my-5">
                            Chiudi
                        </button>
                        </div>
                    </div>
                </div>
                `;
                
              const closeEl = document.querySelectorAll('.close_btn')
                closeEl.forEach(button => {
                    button.addEventListener("click", () => {
                        document.querySelectorAll('.modal').forEach(modal => modal.remove());
                        
                    });
                });
            });
        });
    })
    .catch(error => console.error('Errore:', error));
