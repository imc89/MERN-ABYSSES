import React from 'react'
import '../css/fishes-styles.css';
import '../css/mainstyles.css';
import '../css/button-style.css';


function Card() {
  return (
      <div class="card-info-container">
        <section style={{border: "2px solid red", padding: "16px"}}>
        <div class="card-info">
          <div style={{alignSelf: "center"}}>
            <h1 style={{color: "white", width: "300px", textAlign: "center", marginLeft: "15px"}}>Peces bentónicos de la zona de transición 01</h1>
          </div>
          <div>
            <p style={{color: "white", textAlign: "center"}}>
              Puede que no sea exactamente un pez de aguas profundas, ya que a veces es avistado por buceadores.
              El tiburón gato manchado japonés, se encuentra en aguas poco profundas y hasta varios centenares de
              metros de profundidad, es una especie de tiburón dócil con una gran fuerza y la inusual costumbre de llenar
              el estómago de agua e hincharlo como los peces globo. Son ovíparos y producen huevos provistos de lianas que
              pueden utilizar para agarrarse a las rocas, etc. Por otro lado, el mixino japonés es un pez voraz que se
              entierra en el cuerpo de los peces muertos y se alimenta de su carne y órganos. Sus ojos están enterrados bajo
              la piel y no tiene escamas ni mandíbulas. A pesar de carecer de estas características, los primeros peces que
              aparecieron en la prehistoria fueron los peces sin mandíbulas. Las hendiduras branquiales son diferentes:
              el mixino negro tiene seis a cada lado, mientras que la mixino japonés o mixino púrpura tiene ocho. También
              tienen el inusual comportamiento de anudarse y de producir una gran cantidad de espesa mucosa que expulsan para
              huir de los enemigos.
            </p>
          </div>
        </div>
        <div class="light-img card">
          <img class="glow-img card-img" src="./img/galleries/gallery_1/fishes_1.jpg" width="525" />
          <div style={{marginTop: "10px"}}>
            <div class="names-list">
              <div class="name-info" onclick="jsonInfo('https://raw.githubusercontent.com/imc89/ABYSSE/main/src/data/species-data/1_paramyxine_atami.json')">
                1. Mixino marrón<br />
                <i>　クロヌタウナギ</i><br />
                <i>　Paramyxine atami</i><br />
                10-60cm<br />
                <br />
              </div>
              <div class="name-info" onclick="jsonInfo('https://raw.githubusercontent.com/imc89/ABYSSE/main/src/data/species-data/2_eptatretus_okinoseanus.json')">
                2. Mixino japonés<br />
                <i>　ムラサキヌタウナギ</i><br />
                <i>　Eptatretus okinoseanus</i><br />
                6-10cm<br />
                <br />
              </div>
              <div class="name-info" onclick="jsonInfo('https://raw.githubusercontent.com/imc89/ABYSSE/main/src/data/species-data/3_cephaloscyllium_umbratile.json')">
                3. Tiburón gato manchado japonés<br />
                <i>　ナヌカザメ</i><br />
                <i>　Cephaloscyllium umbratile</i><br />
                30-60cm (Lv.15cm)
                <br />
              </div>
            </div>
            <div class="subcard">
              <div>
                <img class="card-img" src="./img/scheme/knotting.jpg" width="250" />
                <p style={{fontSize: "13px", textAlign: "center"}}> COMPORTAMIENTO DE ANUDARSE </p>
              </div>

              <div class="card-control">
                <div class="light-button">
                  <button class="glow-button change-cursor"
                    onclick="window.location.href='../../../../index.html'"> HOME
                  </button>
                </div>
                <br />
                <div class="light-button">
                  <button class="glow-button change-cursor" onclick="window.location.href='../gallery.html'">
                    WHALE VIEW
                  </button>
                </div>
                <br />
                <div class="container-arrow-buttons">
                  <button class="arrow arrow-size arrow-button-left change-cursor" disabled>
                    <p class="change-cursor"><i class="arrow up-arrow change-cursor"></i></p>
                  </button>
                  <button class="arrow arrow-size arrow-button-right change-cursor"
                    onclick="window.location.href='./fishes_2.html'">
                    <p class="change-cursor"> <i class="arrow down-arrow change-cursor"></i></p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
  )
}

export default Card