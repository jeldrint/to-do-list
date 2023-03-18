const layout = () => {
    const side = document.createElement('section');
    const container = document.querySelector('.container');
    
    side.innerText = 'side';
    side.className = 'side-banner';
    container.appendChild(side);    
}

layout();