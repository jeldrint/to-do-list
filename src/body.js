const layout = () => {
    const body = document.createElement('section');
    const container = document.querySelector('.container');
    
    body.className = 'body-banner';
    container.appendChild(body);    
}

layout();