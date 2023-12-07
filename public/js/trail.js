document.addEventListener('DOMContentLoaded', () => {
  const newTrailForm = document.querySelector('.new-trail-form');
  const leaveRatingForm = document.querySelector('.leave-rating-form');

  if (newTrailForm) {
    newTrailForm.addEventListener('submit', newTrailFormHandler);
  }

  if (leaveRatingForm) {
    leaveRatingForm.addEventListener('submit', (event) => {
      // Assuming the dataset is on the clicked element, not the form
      const trailId = event.target.dataset.trail_name;
      leaveRatingFormHandler(event, trailId);
    });
  }

  // Add an event listener to handle clicks on trail names
  document.addEventListener('click', (event) => {
    // Check if the clicked element or its parent has the 'trail-item' class
    const trailItem = event.target.closest('.trail-item');
    if (trailItem) {
      // Get the sanitized trail name from the data attribute
      const sanitizedTrailName = trailItem.dataset.sanitized_trail_name;
      // Navigate to the specific trail page
      window.location.href = `/trails/${sanitizedTrailName}`;
    }
  });
});

