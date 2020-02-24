function addGraduate(e) { 
    e.preventDefault(); 
    let grad = { 
        name: document.getElementById('name').value, 
        role: document.getElementById('role').value, 
        company: document.getElementById('company').value, 
        yearOfGraduation: document.getElementById('yearOfGraduation').value
    };
    console.log(grad);
    let xhrPost = new window.XMLHttpRequest();
    xhrPost.open('Post', 'http://localhost:3000/api/grads');
    xhrPost.setRequestHeader('Content-Type', 'application/json');
    xhrPost.send(JSON.stringify(grad)); 
}

