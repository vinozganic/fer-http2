for (let i = 1; i <= 30; i++) {
    document.getElementsByClassName("gallery")[0].innerHTML += `
        <div class="image-container">
            <img src="public/img_${i}.jpg" alt="Image ${i}">
        </div>
    `;
}
