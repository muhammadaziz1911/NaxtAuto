import React from 'react'
import "./Homepage.css" ;

import { BsLightningCharge } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { HiOutlineShieldCheck } from "react-icons/hi2";


const Homepage = () => {
  return (
    <div>
      
      {/* <div className="main_container"> */}

        <div className="container">

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
          
          <div className="main">

            <div className="main_text">

              <h1>
                Avtomobilingizni <span>
                24 soat</span> ichida naqd pulga soting
              </h1>

              <p>
                NaxtAuto AI texnologiyasi orqali mashinangizni adolatli narxlarda baholaymiz va darhol sotib olamiz. Qidiruvlar va savdolashishlarsiz!
              </p>

            </div>

            <div className="main_buttons">

              <div className="tez_sotish">

                <button type='submit'>
                  Tezda naqd pul olish
                </button>

              </div>

              <div className="see_cars">

                <button type='submit'>
                  Mashinalarni ko'rish
                </button>

              </div>

            </div>

            <div className="why_naxtAuto">

              <h2>
                Nima uchun NaxtAuto?
              </h2>

              <div className="main_boxes">

                <div className="box1">

                  <div className="icon">

                    <BsLightningCharge />

                  </div>

                  <h3>
                    AI Narxlash
                  </h3>

                  <p>
                    Bozordagi minglab real ma'lumotlar asosida avtomatik va adolatli narxlash tizimi.
                  </p>

                </div>

                <div className="box1">

                  <div className="icon">

                    <HiOutlineCurrencyDollar />

                  </div>

                  <h3>
                    24/7 Naqd pul
                  </h3>

                  <p>
                    Tekshiruvdan so'ng pulingizni 24 soat ichida naqd yoki bank kartangizga olasiz.
                  </p>

                </div>

                <div className="box1">

                  <div className="icon">
                    
                    <HiOutlineShieldCheck />

                  </div>

                  <h3>
                    Xavfsiz va Qonuniy
                  </h3>

                  <p>
                    Barcha jarayonlar qonuniy shartnoma asosida, hech qanday yashirin xarajatlarsiz.
                  </p>

                </div>


              </div>

            </div>

          </div>

        </div>

      {/* </div> */}

    </div>
  )
}

export default Homepage
