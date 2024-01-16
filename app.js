document.querySelector('.card').addEventListener('click', function() {
    // Get the modal element
    var modal = document.getElementById('modal');
    // Show the modal
    modal.style.display = 'block';
    modal.style.pointerEvents= 'visible';
    modal.style.opacity = '100%'
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
    document.body.style.opacity = '80%';
  });

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflowY = 'scroll';
    document.body.style.pointerEvents = 'visible';
    document.body.style.opacity = '100%';
}