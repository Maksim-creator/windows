const images = () => {
    const workSection = document.querySelector('.works'),
        bigImageSection = document.createElement('div'),
        bigImage = document.createElement('img');

    workSection.appendChild(bigImageSection);
    bigImageSection.appendChild(bigImage);
    bigImageSection.classList.add('popup');

    bigImageSection.style.cssText = `
        justify-content: center;
        align-items: center;
        display: none;
    `

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if(target && target.classList.contains('preview')){
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            bigImageSection.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        if(target && target.classList.contains('popup')){
            bigImageSection.style.display = 'none'
        }
    })
}

export default images;