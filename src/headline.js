const headline = ()=>{

  let content = document.getElementById('content')
  let headline = document.createElement('div')
  headline.classList.add('headline')
  headline.innerHTML = `
    <h2>The Restaurant</h2>
    <p>of all the niceties of life, there is non like food. join us and explore food as a n art.</p>    
  `
  content.appendChild(headline)


}

export default headline