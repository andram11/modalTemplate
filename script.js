const modal= document.getElementById('modal');
const openModal= document.getElementById('open-modal');
const closeModal= document.getElementById('close-modal');

// Open modal
openModal.addEventListener('click', () => {
    modal.style.display = 'block';
    }
);

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    }
);

// Close modal when clicked outside
window.addEventListener('click', (e) => {
    if (e.target === modal)
    modal.style.display = 'none';
    }
);