import React from 'react'

export const Translator = () => {
    return (
        <div className="translator-container tool-center">
            <select data-i18n-switcher="" className="translator change-cursor" style={{ textAlignLast: 'center' }}>
                <option value="es">Español</option>
                <option value="en">English</option>
            </select>
        </div>
    )
}
