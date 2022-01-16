const editPostHandler = async(event) => {
    event.preventDefault();
    console.log('hello')
        // Collect values from the login form
    const title = document.querySelector('#name').value.trim();
    const description = document.querySelector('#description').value.trim();
    const id = window.location.toString().split("/")[4]
    if (title && description) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/posts/' + id, {
            method: 'PUT',
            body: JSON.stringify({ title, description }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/users');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector("#edit-btn")
    .addEventListener('click', editPostHandler);