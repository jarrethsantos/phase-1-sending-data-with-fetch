//Test 1

function submitData(name, email) {
    const data = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    };

    return fetch("http://localhost:3000/users", data)
        .then(response => {
            return response.json();
        })

        .then(data => {
            const id = data.id;
            const idElement = document.createElement('p');
            idElement.textContent = `New ID: ${id}`;
            document.body.appendChild(idElement);
        })
        
        .catch(error => {
            console.error('Error:', error);
            const errorElement = document.createElement('p');
            errorElement.textContent = `Error: ${error.message}`;
            document.body.appendChild(errorElement);
        });
}
