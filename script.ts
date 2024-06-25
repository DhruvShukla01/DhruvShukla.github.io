// Define interface for the elements with open class management
interface ToggleableElement extends HTMLElement {
    toggle(className: string): void;
}

function toggleMenu(): void {
    const menu = document.querySelector(".menu-links") as ToggleableElement;
    const icon = document.querySelector(".hamburger-icon") as ToggleableElement;
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
    const wipMessage = document.createElement('div');
    wipMessage.id = 'wip-message';

    const iframe = document.createElement('iframe') as HTMLIFrameElement;
    iframe.src = 'https://giphy.com/embed/JomVilU47wifhL9FSQ';
    iframe.style.position = 'absolute';
    iframe.frameBorder = '0';
    iframe.classList.add('giphy-embed');
    iframe.allowFullscreen = true;

    const gifContainer = document.createElement('div') as HTMLDivElement;
    gifContainer.style.width = '40px';
    gifContainer.style.height = '40px'; 
    gifContainer.style.position = 'relative';
    gifContainer.style.paddingBottom = '0';
    gifContainer.style.marginRight = '30px';

    gifContainer.appendChild(iframe);

    const text = document.createElement('span') as HTMLSpanElement;
    text.innerText = 'Work in Progress';

    wipMessage.appendChild(gifContainer);
    wipMessage.appendChild(text);
    document.body.appendChild(wipMessage);
});
