// Navbar scroll 
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeSidebar');

    hamburger.addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    // Optional: close sidebar when clicking a link
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu ketika klik di luar menu
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scroll navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FAQ Dropdown
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Toggle active class on clicked item
        item.classList.toggle('active');
        
        // Close other open FAQ items (optional - for accordion style)
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
    });
});




// alert 
function showCustomAlert(message, onConfirm) {
    const alertEl = document.getElementById('customAlert');
    const messageEl = document.getElementById('alertMessage');
    const confirmBtn = document.getElementById('confirmBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    messageEl.textContent = message;
    alertEl.classList.add('active');

    confirmBtn.onclick = () => {
        alertEl.classList.remove('active');
        onConfirm();
    };

    cancelBtn.onclick = () => {
        alertEl.classList.remove('active');
    };
}

// button pesan
document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.btn-secondary');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const productInfo = this.closest('.product-info');
            const productName = productInfo.querySelector('h3').textContent;
            const productPrice = productInfo.querySelector('.price').textContent;
            
            showCustomAlert(
                `Apakah Anda ingin memesan ${productName} (${productPrice}) melalui WhatsApp?`,
                () => {
                    const message = `Halo, saya tertarik dengan ${productName} (${productPrice}). Boleh tanya-tanya?`;
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://wa.me/6285707393495?text=${encodedMessage}`, '_blank');
                }
            );
        });
    });
});



// pencarian
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const productCards = document.querySelectorAll('.product-card');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        productCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const price = card.querySelector('.price').textContent.toLowerCase();

            if (title.includes(searchTerm) || 
                price.includes(searchTerm)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
                
            }
        });
    }

    // Search on button click
    searchButton.addEventListener('click', performSearch);
    
    // Search on enter key press
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    
    searchInput.addEventListener('input', performSearch);
});



// Form Submission Handler
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;
    const message = document.getElementById('message').value;

    // Format pesan untuk WhatsApp
    const whatsappMessage = `Halo Min!%0ASaya ingin memesan:%0A%0ANama: ${name}%0ANomor HP: ${phone}%0AProduk: ${product}%0APesan: ${message}`;
    
    // Redirect ke WhatsApp
    window.open(`https://wa.me/6285707393495?text=${whatsappMessage}`, '_blank');
}
