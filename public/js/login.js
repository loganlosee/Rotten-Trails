const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the '/' page
      document.location.replace('/');
      console.log(response)
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the '/trails' page
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form'); 
  const signupForm = document.querySelector('.signup-form');

  if (loginForm) {
    loginForm.addEventListener('submit', loginFormHandler);
  }

  if (signupForm) {
    signupForm.addEventListener('submit', signupFormHandler);
  }
});
