
// load and display Reviews from JSON using jQuery
function loadReviews() {
    try {
        const data = JSON.parse(ReviewsJSON);
        const container = $('#Reviews-list');
        
        $.each(data.Reviews, function(index, Review) {
            const stars = '★'.repeat(Review.rating);
            
            const card = $('<div>')
                .addClass('Review-card')
                .html(`
                    <div class="stars">${stars}</div>
                    <p class="Review-text">"${Review.text}"</p>
                    <div class="Review-author">
                        <strong>${Review.name}</strong>
                        <span>${Review.case}</span>
                    </div>
                `);
            
            container.append(card);
        });
        
        // jquery fade-in animation
        $('.Review-card').hide().fadeIn(1000);
        
    } catch (e) {
        console.error('Error loading Reviews:', e);
    }
}

// load and display resources from XML using jQuery
function loadResources() {
    try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(resourcesXML, "text/xml");
        const articles = $(xmlDoc).find('article');
        const container = $('#resources-list');
        
        articles.each(function() {
            const title = $(this).find('title').text();
            const category = $(this).find('category').text();
            const summary = $(this).find('summary').text();
            const date = $(this).find('date').text();
            
            const card = $('<div>')
                .addClass('resource-card')
                .html(`
                    <div class="resource-category">${category}</div>
                    <h3>${title}</h3>
                    <p>${summary}</p>
                    <div class="resource-date">Published: ${date}</div>
                `);
            
            container.append(card);
        });
        
        // jquery slide-down animation
        $('.resource-card').hide().slideDown(800);
        
    } catch (e) {
        console.error('Error loading resources:', e);
    }
}

// enhanced contact form with jQuery (replaces alert with animated message)
function enhanceContactForm() {

    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        const userName = $('#name').val();
        const userEmail = $('#email').val();
        const userMessage = $('#message').val();
        
        // create JSON object from form data
        const formData = {
            name: userName,
            email: userEmail,
            message: userMessage,
            timestamp: new Date().toISOString()
        };
        
        console.log('Form Data (JSON):', JSON.stringify(formData, null, 2));
        
        // animation for success message
        $('<div>')
            .addClass('success-message')
            .text(`Thanks ${userName}! We received your message and will call you soon.`)
            .appendTo('body')
            .fadeIn(500)
            .delay(3000)
            .fadeOut(500, function() {
                $(this).remove();
            });
        
        // reset the form
        this.reset();
    });
}


$(document).ready(function() {
    loadReviews();
    loadResources();
    enhanceContactForm();    
});