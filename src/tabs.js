let tabs 
let selected 

function tabsHeader(tabsList){
  tabs = [...tabsList]
  selected = tabs[0]

  console.log(selected)

    let content = document.getElementById('content')
    let tabsBar = document.createElement('div')
    tabsBar.classList.add('tabs-container');

  tabsList.forEach((tab,index) =>{
    let tabItem = document.createElement('div')
    tabItem.classList.add('tabItem')

    let button =  document.createElement('button')
    button.classList.add('tab-button')
    button.setAttribute('buttonIndex',index)
    button.innerHTML = tab.title
    button.addEventListener('click', swapTab)
    tabItem.appendChild(button)   
    tabsBar.appendChild(tabItem)

  })

  let pannel = document.createElement('div')
  pannel.classList.add('panel')

  pannel.innerHTML =  selected.content
  content.appendChild(tabsBar)
  content.appendChild(pannel)

}



function swapTab(event){
  event.preventDefault()
  let index = event.target.attributes.buttonIndex.value
  selected = tabs[index]
  let pannel = document.getElementsByClassName("panel")[0]
  pannel.innerHTML =  selected.content

}





export default  tabsHeader 