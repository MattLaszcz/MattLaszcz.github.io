
var labelData = [];

var stockData;

async function getData() {
    
    var newPrice;

    for (var key in companies) {
        
        //console.log('stockDATA:' + stockData);
        var obj = companies[key];
        //console.log('obj' + ' '+ obj);
        for (var prop in obj) {
    
             if (prop === 'symbol') {
               symbol = obj[prop];
               //console.log('symbol='+' '+symbol);

             }
             if (prop === 'stockData') {
                stockData = obj[prop];
                 //console.log('symbol='+' '+symbol);
  
               }
            }
           
                                //console.log('symbol='+' '+symbol);
                                const api_url = 'https://sandbox.iexapis.com/stable/stock/'+ symbol +'/quote?token=Tsk_004f4d619c5e416da6feff1def990d45';

                                //console.log('API'+'='+api_url);
                            
                                const res = await fetch(api_url);

                                const data = await res.json();

                                //console.log('latest price:'+ data.latestPrice);
                                stockData.push(data.latestPrice);
                                labelData.push(data.latestPrice);

                                //var newPrice = JSON.stringify(data.latestPrice);

                                document.getElementById(symbol + '-price').innerHTML = data.latestPrice;
                                newPrice = data.latestPrice;
                                //console.log('new price:'+ newPrice);
                                companies[key].price = newPrice;

                                //var testGETELEMENT = document.getElementById(symbol + '-price');
                                //console.log('testGETELEMENT'+testGETELEMENT);

                    //var ctx = document.getElementById('stock-list').querySelectorAll('canvas');
                    //console.log('symbol'+ '=' + symbol);

                    var stringSymbol = 'myChart-' + symbol;
                    //console.log('stringSymbol' +' '+ stringSymbol);
                    var ctx = document.getElementById(stringSymbol);
                    //console.log('ctx='+ctx);

                    var myChart = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: labelData,
                            datasets: [{
                                label: '',
                                fill: false,
                                showLine: true,
                                borderWidth: 1,
                                data: companies[key].stockData,
                                backgroundColor: [
                                    '#EAF0F8',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                ],
                                borderWidth: 0,
                                boxwidth:0
                            }]
                        },
                        options: {
                            legend: {
                                display: false,
                                labels: {
                                    fontColor: 'rgb(255, 99, 132)'
                                }
                            },
                            axes: {
                                display: false,
                            },
                            pointLabels: {
                                display: false,
                            },
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        color: "rgba(0, 0, 0, 0)",
                                    },
                                    
                                }],
                                yAxes: [{
                                    gridLines: {
                                        color: "rgba(0, 0, 0, 0)",
                                    }
                                }],
                            },
                            scaleShowLabels : true,
                            animation: {
                                duration: 0 // general animation time
                            },
                            elements: {
                                point:{
                                    radius: 0
                                }
                            },
                            
                            
                        },
                    }); 

            };
                //  for (var prop in obj) {
                //     if (prop === 'price') {
                //     companies[key].price = newPrice;
                //     }
                //  };
    };

//setInterval(getData, 1000);

getData();

