# Daily Tarot Reader
The Daily Tarot Reader is an application where the user can select which kind of reading they would like: Three-Card Spread or the Celtic Cross. From there, they ask a question and draw the cards to get their reading.
**Please note: tarot readings are symbolic, thus not meant to be taken literally.**

## How To Use
The Daily Tarot Reader has its own URL!
Link to Application: https://tarot-mu-sand.vercel.app/

## Tech Stack:
- React
- Vercel

## Features
- Pictures of tarot cards with each draw.
- Cards provide meanings/interpretations along with reversals.
- Selector for two types of readings: a simple Three-Card Spread or the Celtic Cross.

## Background
Update: The app now supports two types of readings. First is still a simple Three-Card Spread as well as the Celtic Cross reading for a more in-depth look. I wanted to add some more complexity to the app and give the user some more variety and options for what they could get out of their reading. This was to take state managment a bit futher and use React objects for the more complex logic of managing two different kinds of readings. One of the challenges was getting the CSS grid to behave when rendering the Celtic Cross spread. Eventually I decided to keep the signifier card separate because it was getting too cluttered with it sitting on top of Card No. 1.

I wanted to make this application pretty straightforward. It started as an idea based on doing tarot readings for fun. It was also a good excercise in state management in React as well as doing a bit more with CSS animations to give it the more realistic feel of shuffling a deck of cards. The cards themselves were saved as JavaScript objects, separated by suit, arcana, etc. for the sake of organization. I chose this over JSON because I needed to be able to access the data beyond being stored as limited types. JavaScript objects are advantageous because they allow methods and data manipulation, meshing well with using React and state management.


## Resources
Images sourced from the Rider-Waite deck, downloaded from https://steve-p.org/cards/RWSa.html 

Celtic Cross References:
https://labyrinthos.co/blogs/learn-tarot-with-labyrinthos-academy/the-celtic-cross-tarot-spread-exploring-the-classic-10-card-tarot-spread?srsltid=AfmBOorPFldMaFZrbOnqogC1jPCiScAFf1txcQ4LTGTw2h9lDVS2eTGy 

Card Meanings: https://labyrinthos.co/blogs/tarot-card-meanings-list?srsltid=AfmBOoqchZ_uDO5Y9crx8-goglQRMFmZitHZGxgo4ZFeC5a8SCBmu2vv 