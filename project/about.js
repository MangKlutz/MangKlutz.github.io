document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const teamMembers = document.querySelectorAll('.member');
teamMembers.forEach(member => {
    member.addEventListener('mouseover', () => {
        member.style.transform = 'scale(1.05)';
    });
    member.addEventListener('mouseout', () => {
        member.style.transform = 'scale(1)';
    });
});
