/* Base64 encoded placeholder images */
const logoBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQ1IiBmaWxsPSIjM2E3YmQ1IiAvPgogICAgPHBhdGggZD0iTTMwIDMwQzMwIDMwIDUwIDcwIDcwIDMwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iOCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogICAgPHBhdGggZD0iTTMwIDcwQzMwIDcwIDUwIDMwIDcwIDcwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iOCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgo8L3N2Zz4=";

const avatarBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQ1IiBmaWxsPSIjZTBlMGUwIiAvPgogICAgPGNpcmNsZSBjeD0iNTAiIGN5PSIzNSIgcj0iMTUiIGZpbGw9IiNhYWEiIC8+CiAgICA8cGF0aCBkPSJNMjUgODVDMjUgNjUgNzUgNjUgNzUgODUiIGZpbGw9IiNhYWEiIC8+Cjwvc3ZnPg==";

const aiAvatarBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQ1IiBmaWxsPSIjMDBkMmZmIiAvPgogICAgPHRleHQgeD0iNTAiIHk9IjYwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmZmYiPkFJPC90ZXh0Pgo8L3N2Zz4=";

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
