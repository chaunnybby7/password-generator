# Password Generator 👩🏻‍💻

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Top Language](https://img.shields.io/github/languages/top/chaunnybby7/password-generator)


This is an application that generates a random password based on user-selected criteria.
This application will run in the browser. 


## Description 📝
```

Step 1: Created a landing page and created flex box that's centered.

Step 2: Add event listener to generate button. A button that says "Generate Password".

Step 3: Used `window.prompt()` asking the (input) desired number of characters for password, with the range of between 8 to 128 characters. 

Step 4: Used `window.alert()` to tell user to select a number between 8-128 characters. The prompt will only continue when the if conditions are met.

Step 5: A generatePassword function is created to take all the input from the previous functions. Generate a password using a random number generator and the charAt method.

Step 6: Used `Math.floor()` and `Math.random()` functions.
```
## Code Snippet 📟


Here's the an example of using window.prompt() method to create a password thart is between 8 - 128 characters.

```

    pwLength = prompt("Please enter the number of characters you want for your new password. (between 8-128 characters): \n(Please type in a number between 8 to 128.) ");

// if conditional statement, if the typed password length is less than 8, an error message will display.

    if (pwLength < 8){ /*If the input number is less than 8, there will be an alert message telling you the password length must be between 8 - 128. */
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    } else if (pwLength > 128){ 
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    } else if (isNaN(pwLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    } else {
    alert("If you choose 'No' for all, your password will only contain lowercase letters.");
    }
    return pwLength;
}
```

 ## List of Technology Used

No installations are required. I'm using Visual Studio Code. 

## Screenshot of the Website

![My Image](assets/images/pwgen.png)

![My Gif](https://media.giphy.com/media/4c5R5o6HwogNItxjLG/giphy.gif)






## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* <a href="https://chaunnybby7.github.io/password-generator/"> Password Generator</a>


## Authors

* **YiLin Ong** 

- [Link to Github Password Generator Repo](https://github.com/chaunnybby7/password-generator)
- [Link to Github](https://github.com/chaunnybby7)
- [Link to LinkedIn](https://www.linkedin.com/in/chauntelleong)


## Licese 

MIT License

Copyright (c) [2022] [YiLin Ong]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.