function toggleMenu() {
    var menu = document.querySelector(".menu-links");
    var icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', function () {
    var wipMessage = document.createElement('div');
    wipMessage.id = 'wip-message';
    var iframe = document.createElement('iframe');
    iframe.src = 'https://giphy.com/embed/JomVilU47wifhL9FSQ';
    iframe.style.position = 'absolute';
    iframe.frameBorder = '0';
    iframe.classList.add('giphy-embed');
    iframe.allowFullscreen = true;
    var gifContainer = document.createElement('div');
    gifContainer.style.width = '40px';
    gifContainer.style.height = '40px';
    gifContainer.style.position = 'relative';
    gifContainer.style.paddingBottom = '0';
    gifContainer.style.marginRight = '30px';
    gifContainer.appendChild(iframe);
    var text = document.createElement('span');
    text.innerText = 'Work in Progress';
    wipMessage.appendChild(gifContainer);
    wipMessage.appendChild(text);
    document.body.appendChild(wipMessage);
});
