import headline from './headline';
import home  from './home';
import about from './about';
import contact from './contact';
import  tabsHeader  from './tabs';

headline()

// let tabs = [home,about,contact]
// let selected = tabs[0]


// function putTabs(tabs){
//     let content = document.getElementById('content')
//     let tabsBar = document.createElement('div')
//     tabsBar.classList.add('tabs-container');

//   tabs.forEach((tab,index) =>{
//     let tabItem = document.createElement('div')
//     tabItem.classList.add('tabItem')

//     let button =  document.createElement('button')
//     button.classList.add('tab-button')
//     button.setAttribute('buttonIndex',index)
//     button.innerHTML = tab.title
//     button.addEventListener('click', swapTab)
//     tabItem.appendChild(button)   
//     tabsBar.appendChild(tabItem)

//   })

//   let pannel = document.createElement('div')
//   pannel.classList.add('panel')

//   pannel.innerHTML =  selected.content
//   content.appendChild(tabsBar)
//   content.appendChild(pannel)

// }

// function swapTab(event){
//   let tabs = [home,about,contact]
//   event.preventDefault()
//   let index = event.target.attributes.buttonIndex.value
//   selected = tabs[index]
//   let pannel = document.getElementsByClassName("panel")[0]
//   pannel.innerHTML =  selected.content

// }

// document.addEventListener('DOMContentLoaded',tabsHead([home,about,contact]))

tabsHeader([home,about,contact])

// putTabs([home,about,contact])