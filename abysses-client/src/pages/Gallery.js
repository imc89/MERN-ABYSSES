import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react'
import { useLocation } from "react-router-dom";
import UsuarioIndividual from '../components/UsuarioIndividual.js'
import speciesCardsCounter from '../js/cardCounter.js'
import GalleryLoader from '../components/GalleryLoader.js';


function Gallery(props) {
  const [counter, setCounter] = useState(null);
  const location = useLocation();
  let { fromHome } = location.state;
  let zone = fromHome.zone;
  const [dataspecies, setDataSpecie] = useState([]);
  useEffect(() => {
    axios.get('api/pruebas/getspecies').then(res => {
      console.log(res.data)
      setDataSpecie(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])


  function eliminarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  //  ESTUDIAR ESTE CODIGO QUE FUNCIONA Y ES GENERADO POR IA
  const memoizedCounter = useMemo(() => {
    if (dataspecies && dataspecies.length > 0) {
      // Perform the calculation in speciesCardsCounter if dataspecies is valid and not empty
      return speciesCardsCounter(dataspecies);
    } else {
      return 0; // Return 0 if dataspecies is invalid or empty
    }
  }, [dataspecies]); // Depend on dataspecies for updates

  useEffect(() => {
    // Update counter only when memoizedCounter changes
    setCounter(memoizedCounter);
  }, [memoizedCounter]);
  // 

  const speciesList = dataspecies.map(specie => {
    if (eliminarAcentos(specie.zone) === zone) {
      return (
        <div>
          <UsuarioIndividual specie={specie} />
        </div>
      )
    }
  })

  const isZoneCorrect = dataspecies.some(specie => eliminarAcentos(specie.zone) === zone);


  return (
    <div>
      <p>ZONE: {zone}</p>
      {isZoneCorrect && <GalleryLoader counterCard={counter}></GalleryLoader>}
    </div>
  );
}

export default Gallery