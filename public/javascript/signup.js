async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
            username,
            email,
            password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);

        // check the response status
        if (response.ok) {
            console.log('success');
            window.location = '/dashboard';
        } 
        else {
            response.json().then(data => {
                alert(data.message);
            });
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);