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
                photoEl[i].setAttribute('data-url', url);
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
                        </div>
                    </div>
                </div>
                `;
                
              const closeEl = document.querySelectorAll('.modal')
                closeEl.forEach(close => {
                    close.addEventListener("click", () => {
                        document.querySelectorAll('.modal').forEach(modal => modal.remove());
                        
                    });
                });
            });
        });
    })
    .catch(error => console.error('Errore:', error));
