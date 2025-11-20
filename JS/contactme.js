        const EMAILJS_CONFIG = {
            SERVICE_ID: 'service_rky6agp',     
            TEMPLATE_ID: 'template_hrtkrin',   
            PUBLIC_KEY: 'p47Sk80mWXbz4FOlA'  
        };

        (function() {
            emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        })();

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = document.getElementById('submitBtn');
            const statusMessage = document.getElementById('statusMessage');
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending<span class="spinner"></span>';
            statusMessage.style.display = 'none';

            emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message
            })
            .then(function(response) {
               // Success
                statusMessage.className = 'status-message success';
                statusMessage.textContent = '✅ Message sent successfully! I\'ll get back to you soon.';
                statusMessage.style.display = 'block';
                
                document.getElementById('contactForm').reset();
                
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message';
            })
            .catch(function(error) {

                statusMessage.className = 'status-message error';
                statusMessage.textContent = '❌ Oops! Something went wrong. Please try again.';
                statusMessage.style.display = 'block';
                
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message';
                
                console.error('EmailJS Error:', error);
            });
        });