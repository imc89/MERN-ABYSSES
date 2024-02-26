import React from "react";
import '../css/index.css';
import '../css/menu-styles.css';
import '../css/mainstyles.css';
import '../css/translator-styles.css';
import '../css/toggle-style.css';
import '../css/searcher-style.css';
import '../css/autocomplete-style.css';
import { Menu } from "../components/Menu";
import { Searcher } from "../components/Searcher";
import { Translator } from "../components/Translator";

function home() {
    return (
        <div className="body">
            <div className="link-wrap-left">
                <div className="logo">
                    <img id="logo-img" src="./img/icons_and_labels/video.gif" />
                </div>
            </div>

            <div className="tools-container">
               <Searcher></Searcher>
                <Translator></Translator>
            </div>

            <div className="flex-container">
                <div className="left-column">
                    <div className="link-wrap-left">
                        <Menu></Menu>
                    </div>
                </div>


                <div className="right-column">
                    <div className="link-wrap-right">
                        <div id="main">
                            <p data-i18n-key="main-text.1" className="text" style={{ marginTop: '225px' }}> Ocupa el 70,8% de la
                                superficie de la Tierra.</p>
                            <p data-i18n-key="main-text.2">Con una profundidad media de 3.795 m.</p>
                            <p data-i18n-key="main-text.3">El océano, la mayor biosfera de la Tierra,</p>
                            <p data-i18n-key="main-text.4">es un vasto y cruel mundo de oscuridad,</p>
                            <p data-i18n-key="main-text.5">alta presión y bajas temperaturas donde</p>
                            <p data-i18n-key="main-text.6">hay criaturas que viven y prosperan</p>
                            <p data-i18n-key="main-text.7">en este inmenso e inhóspito mundo.</p>
                            <p data-i18n-key="main-text.8">Conozcamos a los habitantes de las profundidades,</p>
                            <p data-i18n-key="main-text.9"> un espacio poco conocido que sigue</p>
                            <p data-i18n-key="main-text.10"> resistiéndose a la intrusión humana...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home