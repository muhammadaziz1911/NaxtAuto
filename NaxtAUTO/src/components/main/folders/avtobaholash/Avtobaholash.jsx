import React from 'react'
import "./Avtobaholash.css"

const Avtobaholash = () => {
  return (
    <div>
      
      <div className="main_header">

        <div className="avtobaholash_header">

          <div className="header">

            <div className="header_title">

              <h2>
                <span>
                  Naxt
                </span>
                Auto
              </h2>

            </div>

            <div className="nav">

              <ul>
                
                <li>
                  <a href="#">MarketPlace</a>
                </li>

                <li>
                  <a href="#">Tez sotish(Naqd)</a>
                </li>

                <li>
                  <a href="#">Arizalar</a>
                </li>

                <li>
                  <a href="#">Kirish</a>
                </li>

              </ul>

            </div>

            <div className="header_buttons">

              <div className="sotish_button">

                <button type='submit'>
                  Sotish
                </button>

              </div>

              {/* <div className="narxlash_button">

                <button type='submit'>
                  Narxlash
                </button>

              </div> */}

            </div>

          </div>

        </div>

        <div className="avto_baholash_ai">

            <div className="main_box">

              <h3>
                Avto baholash AI
              </h3>

              <p>
                Malumotlarni kiriting va 10 soniyada ichida narxni bilib oling
              </p>

              <div className="marka">
                <h3>
                  Marka
                </h3>
                <select name="marka" id="marka">
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Chevrolet">Chevrolet</option>
                </select>
              </div>

              <div className="model">
                <h3>
                  Model
                </h3>
                <select name="marka" id="marka">
                  <option value="Gentra">Gentra</option>
                  <option value="Gentra">Gentra</option>
                  <option value="Gentra">Gentra</option>
                </select>
              </div>
              
              <div className="yili">
                <h3>
                  Yili
                </h3>
                <input type="number" placeholder='2022' />
              </div>

              <div className="probeg">
                <h3>
                  Probeg(km)
                </h3>
                <input type="number" />
              </div>

            </div>

        </div>



      </div>

    </div>
  )
}

export default Avtobaholash
