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

      </div>

    </div>
  )
}

export default Avtobaholash
