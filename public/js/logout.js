const logout = async () => {
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      console.error('Failed to log out.');
    }
  } catch (error) {
    console.error('Error during logout:', error);
  }
};

document.querySelector('#logout').addEventListener('click', logout)