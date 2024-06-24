function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', () => {
    const wipMessage = document.createElement('div');
    wipMessage.id = 'wip-message';

    const iframe = document.createElement('iframe');
    iframe.src = 'https://giphy.com/embed/JomVilU47wifhL9FSQ';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.position = 'absolute';
    iframe.frameBorder = '0';
    iframe.classList.add('giphy-embed');
    iframe.allowFullscreen = true;

    const gifContainer = document.createElement('div');
    gifContainer.style.width = '50px'; // Adjust size as needed
    gifContainer.style.height = '50px'; // Adjust size as needed
    gifContainer.style.position = 'relative';
    gifContainer.style.paddingBottom = '0';
    gifContainer.style.marginRight = '10px';

    gifContainer.appendChild(iframe);

    const text = document.createElement('span');
    text.innerText = 'Work in Progress';

    wipMessage.appendChild(gifContainer);
    wipMessage.appendChild(text);
    document.body.appendChild(wipMessage);
});
