import React from 'react'

export const Searcher = () => {
  return (
    <div>
    <section className="webdesigntuts-workshop tool tool-center">
        <div className="form container">
            <input style={{ color: 'white' }} id="data" type="search" autoComplete="off"
                placeholder="¿Qué especie deseas buscar?" />
            <button onClick="search()" data-i18n-key="main-search-button" className="change-cursor">BUSCAR</button>
            <ul id="autocomplete-data" className="hidden" role='listbox' aria-label='Search for a species'>
            </ul>
        </div>
    </section>

    <div className="toggle tool-center">
        <div className="toggle-labels">
            <p className="toggle-label toggle-label-common glow" onClick="toggleSwitch()"
                data-i18n-key="main-search-common">COMÚN</p>
            <label className="switch change-cursor">
                <input id="toggle" className="change-cursor" type="checkbox" onClick="toggleSwitch()" />
                <div className="change-cursor"></div>
            </label>
            <p className="toggle-label toggle-label-latin" onClick="toggleSwitch()"
                data-i18n-key="main-search-latin">LATIN</p>
        </div>
    </div>
</div>
  )
}
