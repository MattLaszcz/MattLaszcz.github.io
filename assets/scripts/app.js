
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
  availableStocks = [{name: 'GOOG', price: 10, qty:3},
  {name: 'GOOGLE', price: 1500, qty:2},
  {name: 'NET', price: 11, qty:8},
  {name: 'JNJ', price: 12, qty:7},
  {name: 'AC', price: 13, qty:12}];

  availableFunds = 1000;
  cashflow = 1000;

constructor (name, price, amountOwned, qty) { 
  
  this.name = name;
  this.price = price;
  this.amountOwned = amountOwned;
  this.qty = qty;

  this.cash = {'availableFunds': 1000};

  //this.inputBuyHandler();
  this.renderProducts();
  this.refreshButtonHandler();
  this.portfolioValue();
  //setInterval(this.updateStockPrice(), 1000);
 }



	/*
	- your portfolio value
	- calculates based on 
	current price of stocks
	and shares owned
	*/
	portfolioValue () {

		var total = 0;

		for (var key in this.availableStocks) {
			var obj = this.availableStocks[key];
      console.log(obj);
			var name = '';
			var amountOwned = 0;
 
			for (var prop in obj) {
          console.log(prop);
				/*
				- grab the symbol value 
				- to use to make unique ids for tds
				*/
				if (prop === 'name') {
					name = obj[prop]; 
				}

				if (prop === 'price') {
					//typecast string to float
          var priceOfThisStock = parseFloat(obj[prop]);
          console.log("price of this stock" + ' ' + priceOfThisStock);
				}

				if (prop === 'qty') {
					//typecast string to float
          var amountOwned = parseFloat(obj[prop]);
          console.log("Amount Owned" + ' ' + amountOwned);
					total += priceOfThisStock * amountOwned;
				}

			}
		}
    console.log('total:'+ total);
		return total; 
	}


	changePrice (price) {

		//generate random number -1 or 1
		let chance = Math.round(Math.random()) * 2 - 1;
    console.log('test');
		//adds chance/10 to price
		price += chance/10; 

		return price;
  }





updateStockPrice () {
    //every second do this
    setInterval(function() {

      /*
        - iterate through the stock data
        - change the price to a float
        - run the price through changePrice()
        - replace the new price into the stock data
        - replace the new price of the stock into the table
      */
      for (var key in this.availableStocks) {
        var obj = this.availableStocks[key];

        var symbol = '';

        for (var prop in obj) {

          /*
          - grab the symbol value 
          - to use to make unique ids for tds
          */
          if (prop === 'name') {
            name = obj[prop]; 
          }

          if (prop === 'price') {
            var priceOfThisStock = parseFloat(obj[prop]);
            obj[prop] = changePrice(priceOfThisStock); 
            

            var roundedPrice = (obj[prop]).toFixed(2);
            console.log('rounded price:'+ roundedPrice);
            //$('#'+prop+symbol).html("<span class='price'>" + roundedPrice + "</span>");
          }
        }
      }
      
    }, 1000 /* every second */ );

    }

    refreshButtonHandler () {

      const refreshButton = document.getElementById('refresh');
      
      refreshButton.addEventListener('click', this.updateStockPrice()
      //function refresh(){
      //window.location.reload("Refresh")
          );
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
    price * (Math.floor(Math.random() * 2)))
    

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
                const sum = prc * 5;
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
