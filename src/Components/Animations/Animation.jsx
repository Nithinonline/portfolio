
import React,{useEffect,useRef} from 'react'
import lottie from 'lottie-web'


export const Animations = () => { 

    const container=useRef()

    useEffect(()=>{
        lottie.loadAnimation ({
        container:container.current,
        renderer:"svg",
        loop:true,
        autoplay:true,
        animationData: require("images/office.json"),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
        
     })
    },[])


  return (
    <div className="App">
    <div className="container">lottei1</div>
    </div>
    
  )
}

export default Animations