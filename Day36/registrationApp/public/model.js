function showModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}
function hideModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const action = urlParams.get('action');
    
    if (success === 'true') {
        const messages = {
            'created': 'User successfully registered!',
            'updated': 'Username successfully updated!',
            'deleted': 'User successfully deleted!'
        };
        
        const modal = document.getElementById('successModal');
        const modalTitle = modal.querySelector('h3');
        const modalMessage = modal.querySelector('p');
        
        modalTitle.textContent = action === 'deleted' ? 'Done!' : 'Success!';
        modalMessage.textContent = messages[action] || 'Operation completed successfully!';
        
        showModal();
        
        setTimeout(() => {
            hideModal();
            // Clean URL without reload
            history.replaceState(null, '', window.location.pathname); 
        }, 5000);
    }
});
