# FCC-Build a Random Quote Machine

## Tools used

- HTML
- CSS
- JS
- JQuery
- Ajax request




## User Stories

- User Story #1: I can see a wrapper element with a corresponding id="quote-box".

- User Story #2: Within #quote-box, I can see an element with a corresponding id="text".

- User Story #3: Within #quote-box, I can see an element with a corresponding id="author".

- User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".

- User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".

- User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

- User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

- User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

- User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

- User Story #10: I can tweet the current quote by clicking on the #tweet-quotea element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

- User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

## Design
![project](https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/1.%20Build%20a%20Random-Quote-Machine/img/screenshot/desktop.png)

![project](https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/1.%20Build%20a%20Random-Quote-Machine/img/screenshot/mobile.png)

## Codepen

[Twitter Quote generator](https://codepen.io/danielphilipjohnson/full/MWeQMea)

## How the app executes

```
MODULE.initApp = function() {

    MODULE.setBackgroundColor();

    quoteType = MODULE.getQuoteType();

    MODULE.getQuoteAndSetDom(quoteType);

    MODULE.displayTimeAndDayToDom();
};
```