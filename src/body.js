const layout = () => {
    const body = document.createElement('section');
    const container = document.querySelector('.container');
    
    body.innerText = 'body';
    body.className = 'body-banner';
    container.appendChild(body);    
}

layout();