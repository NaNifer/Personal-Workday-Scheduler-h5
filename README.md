# Project Name - Peronal Workday Scheduler

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
The Personal Workday Scheduler is a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

### The challenge

The Personal Workday Scheduler runs in the browser, and features dynamically updated HTML and CSS powered by JavaScript. The Scheduler has a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

### User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

### Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

### Screenshot

![](./assets/XXXXXX.png)


### Links

- Solution URL: [GitHub Repository](https://github.com/NiferK/Personal-Workday-Scheduler-h5)
- Live Site URL: [Customizable Password Generator](https://niferk.github.io/Personal-Workday-Scheduler-h5/)


## My process


This JS task seemed insumountable to me at first. The terminology, syntax, and overall construction of how the various moving parts interconnected with each other was quite confusing for me. This is how I approached the problem:

I first broke the problem down into smaller sections of code, not worrying about what I needed to do next. I focused on first making the dialog boxes work, and subsequently create the output that I would use in the actual generation of the password. This included both ensuring that I was getting the results that I wanted with the happy path, as well as edge cases. 

Once that was nailed down, I refactored it, because although the dialog boxes were working in isolation, they were really, really WET.

Next, I researched of how to create a function that would ranomly make a string using specific input. I further broke this up into to smaller pieces: One function to create a string of characters, depending on the users input, the second function to randomly select a character from that string, until the maximum characters were met.

I got to a point where all these functions were working independently, but now it was time to put it all together. I entertained the idea of putting all of the code under one function, however I felt that keeping these functions separate, and merely calling upon them in other functions, would keep the code easier to test, easier to understand, and easier to maintain and reuse.


### Built with

- Semantic HTML5 markup
- CSS
- Javascript
- jQuery
- Bootstrap

### What I learned

Blocks of code:

```js
```

```css
```


### Continued development


### Useful resources

These were awesome resources:


- [MDN, Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

## Author

- GitHub - [NiferK](https://github.com/NiferK)
- Portfolio - [Nifer Kilakila](https://niferk.github.io/Nifer-Kilakila-Portfolio-h2/)


## Acknowledgments

A huge shout out to [nullaus](https://github.com/nullaus) who was my quick dial on all the random questions about JS, and taught me that the arguments of functions could call on variables inside of other functions.