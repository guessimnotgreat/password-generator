const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_-+=?';
const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
let canCopy = false;

document.querySelector('body').addEventListener('click', e => {
    e.target.id === 'generate-btn' && renderPassword()
    e.target.classList.contains('password-box') && copyToClipboard(e.target.id)
})

function renderPassword() {
    const firstPassword = generatePassword(14)
    const secondPassword = generatePassword(14)
    const passwords = [firstPassword, secondPassword]

    document.querySelectorAll('.password-box').forEach(
        (box, index) => {
            console.log(passwords[index])
            box.innerHTML = passwords[index]
        }
    )
    canCopy = true
}

function generatePassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    return password;
}

async function copyToClipboard(elementId) {
    if (!canCopy) return;
    const passwordElement = document.getElementById(elementId);
    const textToCopy = passwordElement.textContent;

    try {
        await navigator.clipboard.writeText(textToCopy);
        alert('Password copied to clipboard!');
    } catch (err) {
        console.error('Unable to copy to clipboard:', err);
    }
}