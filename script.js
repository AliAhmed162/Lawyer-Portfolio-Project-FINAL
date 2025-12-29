
let faqList = [
    {
        q: "Do you offer a free consultation?",
        a: "Yes! Your first meeting with us is 100% free. We will listen to your case and tell you how we can help."
    },
    {
        q: "What should I bring to the meeting?",
        a: "Please bring any papers related to your case, like police reports or court letters. The more info, the better."
    },
    {
        q: "How much does it cost?",
        a: "It depends on the case. We offer fixed prices for some cases and hourly rates for others. We are always honest about fees."
    },
    {
        q: "Do I have to go to court?",
        a: "Not always. We try to solve problems before court. But if we must go, Mr. X will fight for you there."
    }
];

function createFaqList() {
    let container = document.getElementById('faq-list');

    for (let i = 0; i < faqList.length; i++) {
        
        let box = document.createElement('div');
        box.className = 'faq-item';

        let title = document.createElement('h3');
        title.className = 'faq-question';
        title.textContent = faqList[i].q;

        let answer = document.createElement('div');
        answer.className = 'faq-answer';
        answer.textContent = faqList[i].a;

        box.appendChild(title);
        box.appendChild(answer);

        box.addEventListener('click', function() {
            this.classList.toggle('active');
        });

        container.appendChild(box);
    }
}

function runMobileMenu() {
    let btn = document.getElementById('menu-btn');
    let links = document.getElementById('nav-links');

    if (btn) {
        btn.addEventListener('click', function() {
            links.classList.toggle('active');
        });
    }
}

// function runContactForm() {
//     let form = document.getElementById('contact-form');

//     if (form) {
//         form.addEventListener('submit', function(event) {
//             event.preventDefault();

//             let userName = document.getElementById('name').value;

//             alert("Thanks " + userName + "! We received your message and will call you soon.");

//             form.reset();
//         });
//     }
// }

window.onload = function() {
    createFaqList();
    runMobileMenu();
    runContactForm();
};