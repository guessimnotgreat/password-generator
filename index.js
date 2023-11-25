const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_-+=?';
let length = 0;
let hasSpecial = false;
let canCopy = false;

const initialize = () => {
    const minLength = 9;
    const maxLength = 14;
    const defaultLength = 12;
    length = defaultLength;

    let html = '';
    for (let i = minLength; i <= maxLength; i++) {
        const selected = i === defaultLength ? 'selected' : '';
        html += `<option value="${i}" ${selected}>${i}</option>`;
    }
    document.getElementById('length').innerHTML = html;
};

const renderPassword = () => {
    const firstPassword = generatePassword(length, hasSpecial);
    const secondPassword = generatePassword(length, hasSpecial);
    const passwords = [firstPassword, secondPassword];

    document.querySelectorAll('.password-box').forEach((box, index) => {
        box.innerHTML = passwords[index];
    });

    canCopy = true;
};

const generatePassword = (length, hasSpecial) => {
    const allCharacters = hasSpecial
        ? uppercaseLetters + lowercaseLetters + numbers + specialCharacters
        : uppercaseLetters + lowercaseLetters + numbers;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    return password;
};

const copyToClipboard = async (elementId) => {
    if (!canCopy) return;
    const passwordElement = document.getElementById(elementId);
    const textToCopy = passwordElement.textContent;

    try {
        await navigator.clipboard.writeText(textToCopy);
        alert('Password copied to clipboard!');
    } catch (err) {
        console.error('Unable to copy to clipboard:', err);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initialize();

    document.querySelector('body').addEventListener('click', (e) => {
        if (e.target.id === 'generate-btn') {
            renderPassword();
        }
        if (e.target.classList.contains('password-box')) {
            copyToClipboard(e.target.id);
        }
    });

    const checkbox = document.getElementById('special-checkbox');
    checkbox.addEventListener('change', () => {
        hasSpecial = checkbox.checked;
    });

    const dropdown = document.getElementById('length');
    dropdown.addEventListener('change', () => {
        length = dropdown.value;
        console.log(length);
    });
});
