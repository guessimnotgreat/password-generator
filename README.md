# Chrome Extension: Password Generator

A powerful Chrome extension designed to create secure and customizable random passwords with ease.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Security](#security)
- [Important Note](#important-note)
- [Feedback](#feedback)
- [Acknowledgments](#acknowledgments)
- [License](#license)
- [Code Overview](#code-overview)
- [Video Demo](#video-demo)
- [Future Developments](#future-developments)

## Features

- Generate random passwords with the click of a button.
- Control password length and include special characters.
- Copy generated passwords to the clipboard.
- Robust and extensible JavaScript implementation.

## Installation

1. Open Chrome and go to `chrome://extensions/`.
2. Enable "Developer mode" in the top right corner.
3. Click "Load unpacked" and select the folder where you cloned/downloaded the extension.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. A popup with the password generator interface will appear.
3. Adjust the options (length and special characters).
4. Click "Generate passwords" to generate two random passwords.
5. Click on a password box to copy the password to the clipboard.

## Options

- **Special Characters:** Enable or disable the inclusion of special characters in generated passwords.
- **Password Length:** Choose the length of the generated passwords within the range of 9 to 14 characters. The default length is set to 12 characters.

## Security

- This extension uses a secure random number generator to generate passwords.
- Passwords are generated locally on your machine and are not transmitted over the internet.
- It is recommended to regularly update your passwords for enhanced security.

## Important Note

**Please Note:** The generated passwords are not stored by the extension. If you close the extension or refresh the page, the generated passwords will be lost. Ensure you store the generated passwords locally before navigating away from the extension.

## Feedback

I welcome your feedback! If you encounter any issues or have suggestions for improvement, please [open an issue](https://github.com/guessimnotgreat/password-generator/issues).

## Acknowledgments

I express my gratitude to the [CS50](https://cs50.harvard.edu/) course for their guidance and support throughout the development of this extension.

## License

This project is licensed under the [MIT License](LICENSE).

## Code Overview

The core functionality of the extension is implemented through JavaScript. Let's go over some key points:

- `initialize`: Sets up the initial state, including the password length dropdown.
- `renderPassword`: Generates and displays two random passwords based on user settings.
- `generatePassword`: Generates a password based on the specified length and whether special characters are included.
- `copyToClipboard`: Copies the clicked password box content to the clipboard.
- Event listeners handle button clicks, checkbox changes, and dropdown selection changes.

## Video Demo

Check out the [video demo](https://youtu.be/B0wZzgVopXw) to see the extension in action!

## Future Developments

I plan to enhance this extension in the future with the following features:

- **Password Storage:** Introduce a feature to securely store generated passwords for future use.
- **Numeric Option:** Add an option to include or exclude numeric characters in generated passwords.

Stay tuned for exciting updates!
