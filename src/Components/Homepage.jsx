import React from 'react'
import dhal1 from './assets/dhal1.jpg'
import dhal3 from './assets/dhal3.jpg'
import dhal2 from './assets/dhal2.jpg'
import dhal4 from './assets/dhal4.jpg'
import clothes from './assets/clothes.png'
import groc from './assets/groc.png'
import fruits from './assets/fruits.png'
import meds from './assets/meds.png'
import phone from './assets/phone.png'
import shoe from './assets/shoe.png'
import pc from './assets/pc.png'

import './homepage.css'
export default function App() {
  return (
    <>
      <div className="comp">
        <div className="images">
          <div><img src={dhal2} alt="" /></div>
          <div><img src={dhal4} alt="" /></div>
          <div><img src={dhal1} alt="" /></div>
          <div><img src={dhal3} alt="" /></div>
        </div>
        <div className="text">
          <h3>India's largest B2B Platform for</h3>
          <h3>business & shop-owners</h3>
        </div>
        <div className="quickaccess">
          <div>
            <p>Quick Access</p>
            <ul>
              <a href=""><img src={clothes} alt="" /></a>
              <a href=""><img src={groc} alt="" /></a>
              <a href=""><img src={fruits} alt="" /></a>
              <a href=""><img src={meds} alt="" /></a>
              <a href=""><img src={phone} alt="" /></a>
              <a href=""><img src={shoe} alt="" /></a>
              <a href=""><img src={pc} alt="" /></a>
            </ul>
          </div>
        </div>
        <div className="cat">
          <button >
            Categorise Now
          </button>
        </div>





      </div>
    </>
  )
}
