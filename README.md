# Stock-Market-Simulator-
Stock Market Simulator 

Part 1 - Core
The requirements in this section will guide you in building a minimum viable product (MVP) application. The application you'll build here will let you walk away with a basic product that users will find interesting and appealing.

These core requirements are constructed so that most participants will be able to create a finished product. However, in order to win, you will need to go above and beyond the core requirements. Please see the "Stretch Goals" section for suggestions on how to improve on the basic product.

Core Architecture
The application will be frontend-only as per challenge requirements. 

The stock market simulation we'll be building will involve the following components:

A list of imaginary stocks (stored inside an object or array).

A way to simulate the movement of time.

A way to simulate changes in stock prices.

A way to keep track of available cash

A user interface for buying and selling stocks.

Core Requirements
A list of stocks
Each stock has a:

Name

Price per share

Amount owned

Ex: const stocksExample = [{ name:"Mint Bean", pricePS: 3.50, owned: 10 }]

Simulate the movement of time
The passage of time should should affect your stocks 

(recommended) Game time should move faster than real time 

Ex: 5 seconds real time = 30 minutes game time

Simulate the changes in stock prices
As time passes stock prices should go up or down

Ex: stocksExample.forEach(stock => {stock.pricePS = stock.pricePS * 1.0125}) or

Ex: stocksExample.forEach(stock => {stock.pricePS = stock.pricePS * .9875})

Tracking available funds
A user should be able to track funds

Goes up and down when selling (up) or buying (down) stock

User Interface
As a User I can buy/sell stock

As a user I can see my funds

As a user if I sell my stocks my funds go up

As a user if I am out of funds I can't buy stocks

Ex : 
