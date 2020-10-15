class Stock {
  stocks = [];

  constructor(name,price,amountOwned) {
    this.name = name;
    this.price = price;
    this.amountOwned = amountOwned;
    //this.createStockCard();
    
  }
}

class Stocks {
  //Ex: const stocksExample = [{ name:"Mint Bean", pricePS: 3.50, owned: 10 }]
  availableStocks = [{name: 'GOOG', price: 10, amountOwned: 10, qty:1},
  {name: 'GOOGLE', price: 1500, amountOwned: 11, qty:1},
  {name: 'NET', price: 11, amountOwned: 12, qty:1},
  {name: 'JNJ', price: 12, amountOwned: 13, qty:1},
  {name: 'AC', price: 13, amountOwned: 14, qty:1}];

  availableFunds = 1000;

constructor (name, price, amountOwned, qty) { 

  this.name = name;
  this.price = price;
  this.amountOwned = amountOwned;
  this.qty = qty;

  this.cash = {'availableFunds': 1000};

  this.inputBuyHandler();
  this.renderProducts();
  this.refreshButtonHandler();
  this.tickChangePrices();

}

refreshButton() {

}


tickChangePrices() {
  setInterval(function refresh(){window.location.reload("Refresh")}, 15000);
}

refreshButtonHandler () {

  const refreshButton = document.getElementById('refresh');
  //console.log(refreshButton);
  refreshButton.addEventListener('click',function refresh(){
        window.location.reload("Refresh")
      });
}
/*createElement (stock) {
        
        const prodUl = document.getElementById('active');
        const prodEl = document.createElement('li');
        prodEl.innerHTML = 
         `
         
           <h2>${this.name}</h2>
           <p>Price:${this.availableStocks[0].price}</p>
           <button>BUY</button>
           <input placeholder="QUANTITY" name="name"/>
           <p>Purchase Total:<p id = "values"></p></p>
          `;
          document.getElementById('active').appendChild(prodEl);
          prodEl.classList.add('card');
          const input = document.querySelector('input');
          const log = document.getElementById('values');
          
          input.addEventListener('input', updateValue);
          function updateValue(e) {
              log.textContent = e.target.value;
              const inputValue = e.target.value;
              console.log(this.stocks.name);
              }     
}*/

inputBuyHandler () {

  document.addEventListener('click', function() {

      //const li = document.querySelectorAll('li');
      //const sellButton = li.getElementById('sell-button'); 
      //console.log(sellButton);
        //sellButton.addEventListener('click',console.log('SELL BUTTON WAS CLICKED'))



        //console.log('THIS IS A DOM TEST')
  });
}




renderProducts() {
  
  this.availableStocks.map(stock =>(new AvailableStocks(stock.name,stock.price,stock.amountOwned, stock.qty)))
}

render (availableStocks) {

  this.availableStocks.map(stock =>(this.createElement(availableStocks)))
}

}



class AvailableStocks {

  constructor(name, pricePS, amount, qty) {
    this.name = name;
    this.pricePS = pricePS;
    this.amount = amount;
    this.qty = qty;
    this.newStock();
    this.priceChangeHandler();
    this.moveElement();
   // this.buyButtonHandler();
   
  }

  priceChangeHandler (price) {
    //console.log(this.pricePS);
    return (
      //price + ( (random value of 0.2 of price) * (randomize if negative or positive) ).round to 2 decimal places
      ( price + ( (price * (Math.random() * 0.2)) * (Math.random() < 0.5 ? -1 : 1) ) ).toFixed(2)
    )
    

  }



  purchaseTotalHandler (amount, price) {

    return (amount*price);
  }

  newStock() {

    const prodUl = document.getElementById('active');
        const prodEl = document.createElement('li');
        prodEl.innerHTML = 
         `
         
           <h2>${this.name}</h2>
           <p>Price:${this.priceChangeHandler(this.pricePS)}</p> 
           <button id = 'buy-button'>BUY</button>
           <input placeholder="QUANTITY" name="name"/>
           <p id = "values"></p>
           <p id = 'purchase-total'></p>
          `;
 
          document.getElementById('active').appendChild(prodEl);
          prodEl.classList.add('card');

          const input_1 = document.getElementsByTagName('name').value
          const input = document.querySelector('input');
          const log = document.getElementById('values');
          log.textContent = input_1;
          

          input.addEventListener('input', updateValue);

          function updateValue(e) {
              //log.textContent = e.target.value;
              const prc = this.pricePS;
              const inputValue = e.target.value;
              console.log(inputValue);
			 
			
              for (const prc of inputValue) {
                const sum = prc * ((Math.random() * 0.2)) * (Math.random() < 0.5 ? -1 : 1) ;
                console.log(sum);
                const purchaseTotal = document.getElementById('purchase-total');
                purchaseTotal.textContent = 'TOTAL' + ' ' + '$' + sum;
              }
              
          }
  }


  inputHandler() {
    const input = document.querySelector('input');
    input.addEventListener('input', );
    
  }

  moveElement () {
    
    const buyButton = document.getElementById('buy-button')
    buyButton.addEventListener('click', this.buyHandler());
  }

  buyHandler() {

  }
  
}
  

class App {
  static init() {
   
    new Stocks();
    
  }
}

App.init();