// Fetch data from the API
fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(data => {
    const photoGallery = document.getElementById('photo-gallery'); //Mother div selection

    // Display first 20 images for simplicity
    data.slice(0, 10).forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.classList.add('photo-item');

        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.title;

        const title = document.createElement('p');
        title.textContent = photo.title;

        actionDiv = document.createElement('div');
        editBtn = document.createElement('button');
        deleteBtn = document.createElement('button');

        photoItem.appendChild(img);
        photoItem.appendChild(title);

        photoGallery.appendChild(photoItem);
        photoItem.appendChild(actionDiv);
        actionDiv.appendChild(editBtn);
        actionDiv.appendChild(deleteBtn);
        editBtn.innerText = "Edit";
        deleteBtn.innerText = "Delete"
    });
})
.catch(error => console.error('Error fetching data:', error));