# Codewars Autowriter

#### This script uses axios and cheerio to scrape the codewars site and automatically create a template folder that can be added to your github repo. All you need to do is enter the link to your kata. 

#### By default, the folder will be saved in the same directory that holds the codewars autowriter folder. 

#### The folder will be named with the following convention: MM.DD.YY-kyu-level-name-of-kata

#### within the folder, there will be a file called 'solution.js"
#### solution.js will be autofilled with the following information about the kata.

> Solution for 6 kyu Sample Kata <br>
> Link to kata: https://www.codewars.com/kata/57d250e55dc38e288c000081/javascript

# Instructions - you must have node.js installed. 

## 1. Download/fork/clone repo. Add codewars-autowriter to what ever local folder you are using to store your codewars solutions. 
## 2. Open terminal and cd into codewars-autowriter 
## 3. run the following: 
```
npm install 
node main.js
```
## 4. From here you will be prompted to ender the link to your kata. It must match the following format: https://www.codewars.com/kata/57d250e55dc38e288c000081/javascript
#### (the easiest way to get this link is by clicking the 'details' tab of a completed kata.)

## 5. cd into the newly created folder and add your solution - then your folder will be all set to push to your repo! 






