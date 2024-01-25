// import './App.css'
// import "./Button/Button.css"
// import "./Button/animation-recap.css"
// import "./Button/loading-animation.css"
// import "./Button/clip-path-transition.css"
 import "./Button/transition-mixed-with-js.css"

function App() {

  const name = "Programming Hero";

  const nameArr = name.split("");
  console.log(nameArr);

  return (
    <div className='main'>
      {/* <div className='box-1'></div>
      <div className='container-box-2'>
          <div className='box-2'></div>
      </div> */}
      {/* <h1>Something Cool</h1> */}

      {/* <button className='btn'>Hover me</button> */}

      {/* <div className='box'></div> */}


      {/* <div className='loading'>
        <div className='glass'></div>
        <div className='box-3'></div>
      </div> */}

      {/* <div className='main-2'>
        <div className='card'>
          <h1>Heading</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem eum 
            quae eius expedita officiis natus doloremque error autem dignissimos eaque!</p>
        </div>
      </div> */}


      <div className="container">
        {
          // eslint-disable-next-line react/jsx-key
          nameArr.map((item, i) => (<span className="alphabet" style={{transitionDelay: `${i * 30} ms`}}>{item}</span>))
        }
      </div>

    </div>
  )
}

export default App
