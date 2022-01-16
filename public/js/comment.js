const addCommentHandler = async(event) => {
    event.preventDefault();
    console.log('hello')
        // Collect values from the login form
    const comment = document.querySelector('#addcomment').value.trim();
    const post_id = window.location.toString().split("/")[4]
    if (comment) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment, post_id }),
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
    .querySelector("#addCommentBtn")
    .addEventListener('click', addCommentHandler);