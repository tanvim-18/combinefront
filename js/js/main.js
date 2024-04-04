document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Assuming a successful login, redirect to the specified URL
        const redirectUrl = document.getElementById('redirect-url').value;
        redirectToPage(redirectUrl);

        // You can replace this with your actual login logic
        console.log('Login:', username, password);
    });

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('signup-name').value;
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        // Assuming a successful signup, redirect to the specified URL
        const redirectUrl = document.getElementById('redirect-url').value;
        redirectToPage(redirectUrl);

        // You can replace this with your actual signup logic
        console.log('Signup:', name, username, password);
    });

    function redirectToPage(url) {
        // Create a dynamic form
        const redirectForm = document.createElement('form');
        redirectForm.method = 'post';
        redirectForm.action = url;

        // Append any additional parameters if needed
        // Example: redirectForm.innerHTML = '<input type="hidden" name="param1" value="value1">';

        // Append the form to the body and submit it
        document.body.appendChild(redirectForm);
        redirectForm.submit();
    }
});
