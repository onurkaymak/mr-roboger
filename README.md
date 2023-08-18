# Mr. Roboger's Neighborhood

#### By _**Onur Kaymak**_

## Technologies Used

- _HTML5_
- _CSS_
- _JavaScript_
- _Git_
- _VS Code_

## Description

_An independent project assignment for Epicodus, project is about JavaScript Arrays & Loops. [More information about Epicodus](https://www.epicodus.com)_

## Setup/Installation Requirements

- _Clone this project from provided GitHub repository: [Repository Link](LINK IS GONNA BE HERE)_
- _Navigate to the project's folder and open index.html file in your browser_
- _If you are using VS Code as code editor, simply go to the project folder and right-click index.html to run on VS Code Live Server feature._

## Tests

```
Describe: askMrRoboger()

TEST #1
Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: askMrRoboger(5);
Expected Output: [ 0, 1, 2, 3, 4, 5 ]

TEST #2
Test: "It should replace numbers that contain a "1" with "Beep"
Code: askMrRoboger(5);
Expected Output: [0, "Beep", 2, 3, 4, 5 ]

TEST #3
Test: "It should replace numbers that contain a "2" with "Boop"
Code: askMrRoboger(6)
Expected Output: [0, "Beep", "Boop", 3, 4, 5, 6]

TEST #4
Test: "It should replace numbers that contain a "3" with "Won't you be my neighbor?"
Code: askMrRoboger(6)
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6]


Describe: wordConverter()

TEST #1
Test: "It should replace the numbers with following rule of hierarchy which defines from highest to lowest (3, 2, 1)"
Code: wordConverter(25)
Expected Output: ['0', 'Beep', 'Boop', "Won't you be my neighbor?", '4', '5', '6', '7', '8', '9', 'Beep', 'Beep', 'Boop', "Won't you be my neighbor?", 'Beep', 'Beep', 'Beep', 'Beep', 'Beep', 'Beep', 'Boop', 'Boop', 'Boop', "Won't you be my neighbor?", 'Boop', 'Boop']
```

## Known Bugs

- _There is no known bugs._

## License

MIT License

Copyright (c) [2023] [Onur Kaymak]

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
