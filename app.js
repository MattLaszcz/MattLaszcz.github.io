

class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
      // this.element.parentElement.removeChild(this.element);
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFunction) {
    super();
    this.closeNotifier = closeNotifierFunction;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    tooltipElement.textContent = 'DUMMY!';
    tooltipElement.addEventListener('click', this.closeTooltip);
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const tooltip = new Tooltip(() => {
      this.hasActiveTooltip = false;
    });
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      'button:first-of-type'
    );
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === 'BUY' ? 'Finish' : 'Activate';
    switchBtn.addEventListener(
      'click',
      this.updateProjectListsHandler.bind(null, this.id)
    );
  }

  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
    //console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find(p => p.id === projectId));
    this.projects = this.projects.filter(p => p.id !== projectId);
  }
}



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
}

refreshButton() {

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
              const inputValue = e.target.value;
              console.log(inputValue);
              for (const val of inputValue) {
                const sum = val * 5;
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
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    new Stocks();
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
  }
}

App.init();
