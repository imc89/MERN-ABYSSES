import React, { useState } from 'react'
import axios from 'axios'
import Select from 'react-select';

function Creator() {

    //HOOKS REACT 
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [name, setName] = useState('');
    const [latin, setLatin] = useState('');
    const [size, setSize] = useState('');
    const [weight, setWeight] = useState('');
    const [depth, setDepth] = useState('');
    const [zone, setZone] = useState('');
    const [range, setRange] = useState('');
    const [distribution, setDistribution] = useState('');
    const [iucn, setIucn] = useState('');
    const [page, setPage] = useState('');

    function addFish() {
        var fish = {
            id: id,
            nombre: nombre,
            name: name,
            latin: latin,
            length: size,
            weight: weight,
            zone: zone,
            depth: depth,
            range: range,
            distribution: distribution,
            iucn: iucn,
            page: page,

        }
        console.log(fish)
        axios.post('/api/pruebas/addspecie', fish)
            .then(res => alert(res.data))
            .then(err => console.log(err));
        // fetch('/api/pruebas/addspecie', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(fish)
        // })
        // .then(res => alert(res.data))
        // .then(err => console.log(err));
    }

    const zoneList = [
        { label: 'MESOPELÁGICA', value: 'MESOPELÁGICA' },
        { label: 'BATIPELÁGICA BAJA', value: 'BATIPELÁGICA BAJA' },
        { label: 'BATIPELÁGICA ALTA', value: 'BATIPELÁGICA ALTA' },
        { label: 'ABISAL', value: 'ABISAL' },
        { label: 'HADAL', value: 'HADAL' },
    ]

    const iucnList = [
        { label: 'NO EVALUADO', value: 'NO EVALUADO' },
        { label: 'DATOS INSUFICIENTES', value: 'DATOS INSUFICIENTES' },
        { label: 'MENOR PREOCUPACIÓN', value: 'MENOR PREOCUPACIÓN' },
        { label: 'CASI AMENAZADO', value: 'CASI AMENAZADO' },
        { label: 'VULNERABLE', value: 'VULNERABLE' },
        { label: 'EN PELIGRO', value: 'EN PELIGRO' },
        { label: 'EN PELIGRO CRÍTICO', value: 'EN PELIGRO CRÍTICO' },
        { label: 'EN PELIGRO CRÍTICO', value: 'EN PELIGRO CRÍTICO' },
        { label: 'EXTINTO EN LA NATURALEZA', value: 'EXTINTO EN LA NATURALEZA' },
        { label: 'EXTINTO', value: 'EXTINTO' }
    ]

    const customStyles = {
        option: provided => ({
            ...provided,
            color: 'black'
        }),
        control: provided => ({
            ...provided,
            color: 'black'
        }),
        singleValue: provided => ({
            ...provided,
            color: 'black'
        })
    }

    return (
        <div align="center">
            <br />   <br />
            <br />   <br />
            <label>Nombre</label>
            <input type="text" value={nombre} onChange={(e) => {
                setNombre(e.target.value)
            }} />
            <br />   <br />
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => {
                setName(e.target.value)
            }} />
            <br />   <br />
            <label>Latin</label>
            <input type="text" value={latin} onChange={(e) => {
                setLatin(e.target.value)
            }} />
            <br />   <br />
            <label>Tamaño</label>
            <input type="text" value={size} onChange={(e) => {
                setSize(e.target.value)
            }} />
            <br />   <br />
            <label>Peso</label>
            <input type="text" value={weight} onChange={(e) => {
                setWeight(e.target.value)
            }} />
            <br />   <br />
            <div style={{ width: '300px' }}>
                <Select
                    styles={customStyles}
                    value={zoneList[0]}
                    options={zoneList}
                    onChange={(e) => {
                        setZone(e.value)
                    }}
                />
            </div>
            <br />   <br />
            <label>DEPTH</label>
            <input type="text" value={depth} onChange={(e) => {
                setDepth(e.target.value)
            }} />
            <br />   <br />

            <label>Rango</label>
            <input type="text" value={range} onChange={(e) => {
                setRange(e.target.value)
            }} />
            <br />   <br />
            <label>Distribucion</label>
            <input type="text" value={distribution} onChange={(e) => {
                setDistribution(e.target.value)
            }} />
            <br />   <br />
            <label>IUCN</label>
            <div style={{ width: '300px'}}>
                <Select
                    styles={customStyles}
                    defaultValue={iucnList[0]}
                    options={iucnList}
                    onChange={(e) => {
                        setIucn(e.value)
                    }}
                />
            </div>
            <br />   <br />
            <label>PAGE</label>
            <input type="number" value={page} min="1" max="10000" onChange={(e) => {
                setPage(e.target.value)
            }} />
            <br />   <br />
            <button onClick={addFish}>Guardar</button>
            
        </div>
    )
}

export default Creator
