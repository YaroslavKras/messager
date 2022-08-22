const {hash} = window.location;
const message = atob(hash.replace('#', ''));
if (message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', ev =>{
    ev.preventDefault();

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);
    let inputLink = document.querySelector('#link-input');
    document.querySelector('#link-form').classList.remove('hide');
    document.querySelector('#message-form').classList.add('hide');
    inputLink.value = generateLink(encrypted);
    inputLink.select();
});



const generateLink = (suffix) =>`${window.location}#${suffix}`;
