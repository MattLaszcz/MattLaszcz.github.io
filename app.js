class DOMHelper {
  constructor(type) {this.refresh();
  
  
  
  }
  
    static clearEventListeners(element) {
      const clonedElement = element.cloneNode(true);
      element.replaceWith(clonedElement);
      return clonedElement;
    }
  
  
    //receives element ID and a New destination in the DOM and sends the card to that destination Via Append.
    static moveElement(elementId, newDestinationSelector) {
      const element = document.getElementById(elementId);
      const destinationElement = document.querySelector(newDestinationSelector);
      destinationElement.append(element);
      
    }
  
  refresh () {
  //Testing for selecting the <body> tag
  const body = document.querySelector('body');
  console.log(body);
  const bodyLiSelector = body.querySelectorAll("#active > li")
  console.log(bodyLiSelector);
  }
  }

  class Tooltip {}
  
  class ProjectItem {
    
  
    constructor(id, updateProjectListsFunction, type) {
      this.id = id;
      this.type = type;
      this.updateProjectListsHandler = updateProjectListsFunction;
      //this.connectMoreInfoButton();
      this.connectSwitchButton(type);
      this.createNewButton1();
      this.connectCloneSwitchButton();
      this.connectSwitchButtonTest();
    }
  
    createNew () {
      const newClnIds = [];
      const newItem = document.getElementById('active').querySelector('li');
      const cln = newItem.cloneNode(true);
      cln.id = "p" + (document.querySelectorAll("#active > li").length + 1);
      let clnId = cln.id;
      document.getElementById('active').appendChild(cln);
      console.log(newItem);
      newClnIds.push(clnId);
      console.log(newClnIds);
          
      //Selects the Finish Button in the New Cloned Element and adds event listener to move it to the finished projects column when clicked.
  
      const clnButton = cln.querySelector('button:last-of-type');
      clnButton.addEventListener("click", function() {DOMHelper.moveElement(cln.id, "#finished-projects ul");
            
    
    });        // sends to DOMHelper which receives an id and a location to move that element to with the given id 
  }
  
  connectCloneSwitchButton () {
    const newItem = document.getElementById('active').querySelector('li');
      const cln = newItem.cloneNode(true);
      cln.id = "p" + (document.querySelectorAll("#active > li").length + 1);
  
  
    
    const projectItemElement = document.getElementById(cln.id);
  
    //ProjectList.projects.push(new ProjectItem(cln.id, this.switchProject.bind(this), this.type))
  
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    const testBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
  
    
    let type = testBtn.textContent;
    console.log(testBtn.textContent);
    testBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener(
      'click', this.connectSwitchButton
      //this.updateProjectListsHandler.bind(null, cln.id)
    );
  
  
  
  }
  
  
  createNewButton1 () {
  
    const addNewButton = document.getElementById('addButton');
      addNewButton.addEventListener( 'click', this.createNew);
  }
  
    //connectMoreInfoButton() {}
  
  //This is the test function that I learned from Stack Overflow:
  connectSwitchButtonTest () {
    let e = this.type;
    document.getElementById("task-list").addEventListener("click", function(e) {
      const targetDataset = e.target.dataset;
      if (!Object.keys(targetDataset).includes("finish")) {
        return;
      }
    
      const action = targetDataset["action"];
      const targetId = e.target.parentNode.dataset["taskId"];
      switch (action) {
        case "more":
          alert(`Show more information for #${targetId}`);
          break;
        case "finish":
          alert(`Mark #${targetId} as finished`);
          break;
      }
    
    })
    
  }
  
  
    //retreives the button of the given DOM element and adds an event listener to it that executes updateProjectListHandler
    //recieves from: update () {}
    //runs updateProjectListsHandler --> this.switchProject --> 
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
      //selects all of the li elements under the `#${type}-projects DOM element depending on the element input type 
      //and creates a new ProjectItem for every li element it found. 
      this.type = type;
      const prjItems = document.querySelectorAll(`#${type}-projects li`);
      for (const prjItem of prjItems) {
        this.projects.push(
          new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
        );
  
        console.log(prjItem.id);
      }
  
      /*const newItems = document.querySelectorAll(`#active li`);
      for (const newItem of newItems) {
        this.projects.push(
          new ProjectItem(newItem.id, this.switchProject.bind(this), this.type)
        );
      }*/
     
      //new DayOfWeek('Monday');
      console.log(this.projects);
    }
  
    setSwitchHandlerFunction(switchHandlerFunction) {
      this.switchHandler = switchHandlerFunction;
    }
  
  
    //pushes project to the projects array. Project input is "new ProjectList('finished');"
    addProject(project) {
      this.projects.push(project);
      DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
      project.update(this.switchProject.bind(this), this.type);
    }
  
    //finds every project id in projects with the id matching constant projectId
    //filters out every dom object with id that does not equal the projectId input to the function
    switchProject(projectId) {
      // const projectIndex = this.projects.findIndex(p => p.id === projectId);
      // this.projects.splice(projectIndex, 1);
      this.switchHandler(this.projects.find(p => p.id === projectId));
      this.projects = this.projects.filter(p => p.id !== projectId);
      //console.log(p.id)
    }
  
  
    switchDayHandler() {
      //
      const selectDayOfWeek = document.getElementById('');
      //const dayOfWeek = selectDayOfWeek.querySelector('li')
      selectDayOfWeek.addEventListener(
        'click',
        this.updateDayInfoHandler()
      );
      console.log(selectDayOfWeek);
    }
  
    updateDayInfoHandler () {
      console.log('TEST TEST TEST');
  
    }
  
  }
  
  class DayOfWeek {
  
  constructor (type) {
    this.type = type;
      const prjItems = document.querySelectorAll(`#${type}-projects li`);
      for (const prjItem of prjItems) {
        this.projects.push(
          new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
        );
      }
  
  
    //this.createNewButton();
  }
  
    projects = [];
  
  
  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }
  
  
  
  
  
  /*
        switch (day) {
            case ( 'Monday' ):
              //this.addNewListItemHandler();   
                break;
            case ( 'Tuesday' ):      
              console.log('Tuesday');
                break;
            case ( 'Wednesday' ):
              console.log('Wednesday');
                break;
            case ( 'Thursday' ):
              console.log('Thursday');
                break;
            case ( 'Friday' ):
                console.log('Friday');
                break;
            //default:
              //  ingredient = null;
        }
       
  */
  
  
  
  addNewListItemHandler() {
       
        const projectItem = document.getElementById('active');
        //const projectItemLi = document.getElementById('active li');
        //const projectClone = projectItemLi.cloneNode(true);
        const newListItem = document.createElement('li');
        
        newListItem.innerHTML = `
        
              <h2>MONDAY ITEM</h2>
              <p>Don't forget to pick up groceries today.</p>
              <button class="alt">More Info</button>
              <button>Finish</button>
              `;
  
        newListItem.classList.add('card');
        //newListItem.push(ProjectList.this.projects);
  
  
        projectItem.appendChild(newListItem);
        //projectItem.appendChild(projectClone);
    }
  
    createNewButton() {
      const newButton = document.getElementById('addButton');
      newButton.addEventListener( 'click', this.addNewListItemHandler);
    
    }
  
  
  
  
  
  }
  
  
  
  
  
  
  class App {
  
    static init() {
      const activeProjectsList = new ProjectList('active');
      const finishedProjectsList = new ProjectList('finished');
      //App.activeProjectsList = activeProjectsList;
      new DayOfWeek();
      activeProjectsList.setSwitchHandlerFunction(
        finishedProjectsList.addProject.bind(finishedProjectsList)
      );
      finishedProjectsList.setSwitchHandlerFunction(
        activeProjectsList.addProject.bind(activeProjectsList)
      );
    }
  }
  
  App.init();
  