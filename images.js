// Create image elements when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set logo image
    const logoImg = document.getElementById('logo-img');
    if (logoImg) {
        logoImg.src = logoBase64;
        logoImg.style.backgroundColor = 'transparent';
    }
    
    // Set user avatar image
    const avatarImg = document.getElementById('avatar-img');
    if (avatarImg) {
        avatarImg.src = avatarBase64;
        avatarImg.style.backgroundColor = 'transparent';
    }
    
    // Set AI avatar images
    const aiAvatarImg = document.getElementById('ai-avatar-img');
    if (aiAvatarImg) {
        aiAvatarImg.src = aiAvatarBase64;
        aiAvatarImg.style.backgroundColor = 'transparent';
    }
    
    const aiAvatarSmall = document.querySelectorAll('.ai-avatar-small');
    aiAvatarSmall.forEach(img => {
        img.src = aiAvatarBase64;
        img.style.backgroundColor = 'transparent';
    });
});
