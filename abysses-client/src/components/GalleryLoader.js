import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import '../css/mainstyles.css';
import '../css/button-style.css';
import '../css/gallery_1-styles.css';

function GalleryLoader({ counterCard }) {
  
  return (
    <div>
      {(() => {
        const options = [];
        for (let i = 1; i <= counterCard; i++) {
          options.push(<img className="glow-img glow" style={{ margin: "20px", width: "140px", }}
            src={(`./img/galleries/gallery_1/fishes_${i}.jpg`)}></img>);
        }
        return (

          <div>
            <span class="top-corner">
              <Link reloadDocument to="/">
                <div class="light-button top-corner">
                  <button class="glow-button change-cursor" onclick="window.location.href='../../../index.html'">
                    HOME
                  </button>
                </div>
              </Link>
            </span>
            <div class="light-title">
              <p class="glow-title" data-i18n-key="area-gallery-list.1">ZONA MESOPELÁGICA 1</p>
            </div>
            <hr />

            <div class="row">
              <div class="column">
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} className="glow-img-container">
                  {options}
                </div>
              </div>
            </div>
          </div>
        );
      })()}

    </div>
  )
}

export default GalleryLoader