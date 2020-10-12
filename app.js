

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
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
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
    console.log(this.projects);
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

  /*createStockCard (name,price) {
     const stockCardHTML = (`
          <li>
           <h2>${name}</h2>
           <p>'Price:'${price}</p>
           <button class="alt">More Info</button>
           <button>SELL</button>
          </li> `);     

  }*/
}

class Stocks {
  stocks = [{name: 'GOOG', price: 10, amountOwned: 10},
  {name: 'GOOG', price: 10, amountOwned: 11},
  {name: 'NET', price: 11, amountOwned: 12},
  {name: 'JNJ', price: 12, amountOwned: 13},
  {name: 'AC', price: 13, amountOwned: 14}];

constructor () { 
  this.render();
  
}
createElement (stock) {
        
        const prodUl = document.getElementById('active');
        const prodEl = document.createElement('li');
        prodEl.innerHTML = 
         `
           <h2>${stock[2].name}</h2>
           <p>'Price:${stock[0].price}</p>
           <p>Amount Owned:${stock[0].amountOwned} </p>
           <button class="alt">More Info</button>
           <button>BUY</button>`;

          /* `
           <h2>${stockName}</h2>
           <p>'Price:${stockPrice}</p>
           <p>Amount Owned:${stockAmountOwned} </p>
           <button class="alt">More Info</button>
           <button>BUY</button>`;*/

           document.getElementById('active').appendChild(prodEl);
          prodEl.classList.add('card');
}

render () {

  /*let i;
  for (i = 0, i <= length.stocks, i++)
        let stockName  = this.stocks[i].name;
        let stockPrice  = this.stocks[i].price;
        let stockAmountOwned  = this.stocks[i].amountOwned;
        createElement(stockName,stockPrice,stockAmountOwned)
  }*/


  this.stocks.map(stock =>(this.createElement(this.stocks)))
}





  
  
  //for (stocks of stock) {
    //document.getElementById('active').appendChild(stockCard);
    
    
    
    
      /*const newItem = document.getElementById('active').querySelector('li');
      const cln = newItem.cloneNode(true);
      cln.id = "p" + (document.querySelectorAll("#active > li").length + 1);
      let clnId = cln.id;
      document.getElementById('active').appendChild(cln);
      console.log(newItem);
      newClnIds.push(clnId);
      console.log(newClnIds);*/

  }






  
class Time {
  constructor() {
    this.time();
  }

  time () {
    const currentTime = new Date ( );
    const currentHours = currentTime.getHours ( );
    const currentMinutes = currentTime.getMinutes ( );
    const currentSeconds = currentTime.getSeconds ( );
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    let timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  };


};

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
