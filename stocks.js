


function stocks() {


	//stock data
		companies = [
	  {
	      name : 'Apple'
	    , symbol : 'AAPL'
	    , price : '1'
			, shares : '0'
			, stockData: []
	  },

	  {
	       name: 'Google'
	     , symbol : 'GOOG'
	     , price : '0'
			 , shares : '0'
			 , stockData: []
	   },

	  {
	      name : 'JP Morgan Chase'
	    , symbol : 'JPM'
	    , price : '3'
			, shares : '0'
			, stockData: []
	  },

	  {
	      name : 'Microsoft'
	    , symbol : 'MSFT'
	    , price : '4'
			, shares : '0'
			, stockData: []
	  },

	  {
	      name : 'Facebook'
	    , symbol : 'FB'
	    , price : '5'
			, shares : '0'
			, stockData: []
		}
	];

	//your cash flow
	var cashflow = 10000;

	/*
	- your portfolio value
	- calculates based on
	current price of stocks
	and shares owned
	*/




	var portfolioValue = function(){

		var total = 0;

		for (var key in companies) {
			var obj = companies[key];

			var symbol = '';
			var sharesOwned = 0;

			for (var prop in obj) {

				/*
				- grab the symbol value
				- to use to make unique ids for tds
				*/
				if (prop === 'symbol') {
					symbol = obj[prop];
				}

				if (prop === 'price') {
					//typecast string to float
					var priceOfThisStock = parseFloat(obj[prop]);
					//var priceOfThisStock = obj[prop];
					//console.log(priceOfThisStock);

				}

				if (prop === 'shares') {
					//typecast string to float
					var sharesOwned = parseFloat(obj[prop]);
					total += priceOfThisStock * sharesOwned;
					//console.log(total);
				}

			}
		}
		//console.log(total);
		return total;

	}


	for (var key in companies) {

		var test_symbol = '';

		 var obj = companies[key];
		
		 var test_symbol = obj['symbol'] + '-price';
		 var sharesSymbol = obj['symbol'];
		 for (var prop in obj) {
			if (prop === 'symbol') {
				//test_symbol = obj[prop];
				//console.log(test_symbol);
			}
		}

		const prodUl = document.getElementById('stock-list');
		const prodEl = document.createElement('div');
		prodEl.className = 'stock-card';
    prodEl.innerHTML =
       `
		 <li class="stocks">
			 <h3 class='stock-symbol'>${obj['symbol']}</h3>
			 				<div class="stock-chart" id='stock-chart-${obj['symbol']}'>
                <canvas id="myChart-${obj['symbol']}" ></canvas>
              </div>
				 <div class="stock-data">
						 <div class='shares-percentage'>
							 <button class="button" id = "${obj['symbol'] + 'buy'}" >Buy</button>
							 <button class="button" id="${obj['symbol'] + 'sell'}">Sell</button>
							 <p class="shares-amount" id="shares-amount${sharesSymbol}">${obj['shares']}</p>
						 </div>
						 <div class='shares-price'><p class="price-value" id="${test_symbol}"></p></div>
						 <a href="https://iexcloud.io" class="attribution">IEX Cloud</a>
				 </div>
		 </li>
	 `;

	 document.getElementById('stock-list').appendChild(prodEl);




	   var symbol = '';
		 var html = "<tr>";
	   for (var prop in obj) {

			/*
			- grab the symbol value
			- to use to make unique ids for tds
			*/
			if (prop === 'symbol') {
				symbol = obj[prop];
			}

			if (prop === 'shares') {
			}
 	   }
	}

	//every second do this
	setInterval(function() {

		/*
			- iterate through the stock data
			- change the price to a float
			- run the price through changePrice()
			- replace the new price into the stock data
			- replace the new price of the stock into the table
		*/
		for (var key in companies) {
			var obj = companies[key];

			var symbol = '';
			var stockId = obj['symbol'] + '-price';
			//console.log('stock Id=' + stockId);
			for (var prop in obj) {
				/*
				- grab the symbol value
				- to use to make unique ids for tds
				*/
				if (prop === 'symbol') {
					symbol = obj[prop];
				}


				//UPDATES THE PRICE OF THE STOCK
				 if (prop === 'price') {
				

			 }
			}
		}

	}, 1000 /* every second */ );


	//every second do this
	setInterval(function() {

		/*
			- run cash flow, portfolio value, total worth functions
			  and then put them in the dom
			- decide whether buy/sell buttons should appear
			  and then put them or remove them from the dom
		*/
		for (var key in companies) {
			var obj = companies[key];

			//initialize
			var symbol = '';
			var price = 0;
			var p = 0;
			var t = 0;

			for (var prop in obj) {

				/*
				- grab the symbol value
				- to use to make unique ids for tds
				*/
				if (prop === 'symbol') {
					symbol = obj[prop];
				}

				p = portfolioValue();
				q = p.toFixed(2);
				t = cashflow + p; //cashflow + portfolio value
				n = t.toFixed(2); //truncates the cashflow to 2 decimal places

				$('#cashflow').html(cashflow);//replace element with id 'cashflow' with the cashflow value
				$('#portfolio').html(p);
				$('#netWorth').html(n);

				//hide all buy buttons if cashflow is 0
				if (cashflow === 0) {
					$('button').each(function() { //INSTERT 'button' into the ' '
						//grab the id of this link and typecast it to a string
							var id = String($(this).attr('id'));


  						//if it contains buy hide it
  						if (id.indexOf('buy') > 0) {
  							$(this).hide();
  						}
					});
				}

				//hide buy button if cashflow can't buy a share
				//show buy button if cashflow can buy a share
				if (prop === 'price') {
					price = parseFloat(obj[prop]);
					if (cashflow < price) {
						$('#' + symbol + 'Buy').hide();
					}else {
						$('#' + symbol + 'Buy').show();
					}

				}

				//hide sell button if share isn't owned
				//show sell button if share isn't owned
				if (prop === 'shares') {
					var sharesOwned = parseFloat(obj[prop]);

					if (sharesOwned > 0) {
						$('#' + symbol + 'Sell').show();
					}else {
						$('#' + symbol + 'Sell').hide();
					}
				}
			}
		}

	}, 1000 /* every 1000 mili seconds */ );


	//happens live
$(document).on('click', "button", function(){


		for (var prop in obj) {

			/*
			- grab the symbol value
			- to use to make unique ids for tds
			*/
			if (prop === 'symbol') {
				symbol = obj[prop];
			}

			if (prop === 'price') {
				var priceOfThisStock = parseFloat(obj[prop]);
				


				var roundedPrice = (obj[prop]).toFixed(2);
				var stockId = symbol + '-' + 'price';

				 stockId = JSON.stringify(stockId);
				 console.log(stockId);

				 var queryTest = document.getElementsByTagName("body");
				 document.getElementById(stockId).innerHTML = roundedPrice;
			}
		}

	    //grab the id of this link and typecast it to a string
			var id = String($(this).attr('id'));


	    //if this is a buy button
	    if (id.indexOf('buy') > 0) {
	    	//extract the symbol of the stock this is for
				symbol = id.substr(0, id.indexOf('buy'));


	    	//only do if cash flow is greater than share price
	    	//add a share
	    	//subtract share amount from cashflow

	    	//initialize
	    	var thisObj = 0; //specific object in companies

	    	for (var key in companies) {
	    		var obj = companies[key];

	    		for (var prop in obj) {

	    			if (prop === 'symbol') {
	    				if (obj[prop] === symbol) {
	    					test_symbol=obj[prop];
	    					thisObj = key;
	    				}
	    			}

						//Subtracts price of the stock purchased from the current cashflow.
	    			if (prop === 'price') {
	    				if (key === thisObj) {
	    					var PriceForThisStock = parseFloat(obj[prop]);

	    					if ( cashflow > PriceForThisStock ) {
	    						var subtractPrice = true;

	    						//since you bought a share we should
	    						//subtract the price of the share
	    						//from your cashflow
	    						cashflow = cashflow - PriceForThisStock;

	    					}
	    				}

	    			}

						//update the amount of shares owned.
	    			if (prop === 'shares') {
	    				if (key === thisObj) {

	    					//if cash flow is greater than share price
	    					if (subtractPrice) {
	    						var sharesForThisStock = parseFloat(obj[prop]);

	    						//add 1 to the shares owned for this stock
	    						sharesForThisStock += 1;

	    						//and update the shares inside the companies array
	    						obj[prop] = sharesForThisStock;

	    						//and update the dom
									//$('#shares-amount'+test_symbol).html(sharesForThisStock);
									var sharesId = 'shares-amount'+ test_symbol;
									document.getElementById(sharesId).innerHTML=sharesForThisStock;

	    					}
	    				}
	    			}
	    		}
	    	}

	    }

	    //if this is a sell button
	    if (id.indexOf('sell') > 0) {

	    	//extract the symbol of the stock this is for
	    	symbol = id.substr(0, id.indexOf('sell'));

		    //only do if share of this stock is owned
		    //subtract a share
		    //add share amount to cash flow

	    	//initialize
	    	var thisObj = 0; //specific object in companies

	    	for (var key in companies) {
	    		var obj = companies[key];

	    		for (var prop in obj) {

	    			if (prop === 'symbol') {
	    				if (obj[prop] === symbol) {
								test_symbol=obj[prop];
	    					thisObj = key;
	    				}
	    			}

	    			if (prop === 'price') {
	    				if (key === thisObj) {
	    					var PriceForThisStock = parseFloat(obj[prop]);
	    				}

	    			}

	    			if (prop === 'shares') {
	    				if (key === thisObj) {

	    					var sharesForThisStock = parseFloat(obj[prop]);

	    					//if you own shares for this stock
	    					if (sharesForThisStock) {

	    						//since you sold a share we should
	    						//add the price of the share
	    						//to your cashflow
	    						cashflow = cashflow + PriceForThisStock;

	    						//minus 1 to the shares owned for this stock
	    						sharesForThisStock -= 1;

	    						//and update the shares inside the companies array
	    						obj[prop] = sharesForThisStock;

	    						//and update the dom
									//$('#' + 'shares' + symbol).html(sharesForThisStock);
									var sharesId = 'shares-amount'+ test_symbol;
									document.getElementById(sharesId).innerHTML=sharesForThisStock;
	    					}
	    				}
	    			}

	    		}
	    	}
	    }
	    //act like a button not a link
			return false;
	});
};

stocks();











