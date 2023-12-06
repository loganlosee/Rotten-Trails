const newTrailFormHandler = async (event) => {
  event.preventDefault();

  const trailName = document.querySelector('#trail-name').value.trim();
  const difficulty = document.querySelector('#difficulty').value.trim();
  const length = document.querySelector('#length').value.trim();
  const description = document.querySelector('#description').value.trim();

  if (trailName && difficulty && length && description) {
    const response = await fetch('/api/trails', {
      method: 'POST',
      body: JSON.stringify({ trailName, difficulty, length, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create a new trail.');
    }
  }
};

const leaveRatingFormHandler = async (event, trailId) => {
  event.preventDefault();

  const thumbsUp = document.querySelector('#thumbs-up').checked;

  if (thumbsUp !== undefined) {
    const response = await fetch(`/api/trails/leaveRating/${trailId}`, {
      method: 'POST',
      body: JSON.stringify({ thumbs_up: thumbsUp }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to leave a rating.');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const newTrailForm = document.querySelector('.new-trail-form');
  const leaveRatingForm = document.querySelector('.leave-rating-form');

  if (newTrailForm) {
    newTrailForm.addEventListener('submit', newTrailFormHandler);
  }

  if (leaveRatingForm) {
    leaveRatingForm.addEventListener('submit', (event) => {
      const trailId = /* logic to get the trail ID */;
      leaveRatingFormHandler(event, trailId);
    });
  }
});
