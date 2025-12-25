import React from 'react'
import {useState} from 'react'
const Container1=({data})=> {
    const [slide, setSlide]=useState(0);
  return (
    <div className='Card'>
        {data.map((item,index)=>{
            return(
                <img key={index} src={item.src} alt={item.alt} className={slide===index?"slide":"slide-inactive"}/>
            )
        })}
        <span className="indicators">
            {data.map((_,index)=>{
                return(
                    <button key={index} className={slide===index?"indicator":"indicator indicator-inactive"} onClick={()=>setSlide(index)}/>
                )
            })}
        </span>
    </div>
  )
}

export default Container1