/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react'

const Input = ({ type, id, placeholder, theme, callBack, label, autocomplete, flexed, error, disabled,
    height }) => {
    const [value, setValue] = useState('')

    const flexedStyle = {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',

        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
    const style = {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        width: flexed ? '100%' : '16rem',
        height: height ? height : 'unset',
        whiteSpace: 'pre-wrap',
        '&:focus': {
            outline: '2px solid ',
            outlineColor: theme
        },
        '&::placeholder': {
            fontWeight: '400'
        }
    }
    const handleInputValue = (e) => {
        setValue(e.target.value)
    }
    useEffect(() => {
        callBack(value)
    }, [value])
    return (
        <div css={flexed && flexedStyle} className="my-2 px-4">
            <label
                htmlFor={id}
                className={`${!label && 'hidden'} ${flexed ? 'text-sm mb-2' : 'text-base'} font-semibold text-gray-600 mr-4 select-none cursor-pointer`}>
                {label}
            </label>
            {type !== 'textarea' && <input
                disabled={disabled}
                type={type}
                name={id}
                id={id}
                key={id}
                placeholder={placeholder}
                css={style}
                onChange={handleInputValue}
                value={value}
                autoComplete="true"
                className={`${error ? 'border-2 border-red-800' : 'border border-gray-400'} px-2 ${height ? 'overflow-x-scroll py-0.5' : 'py-2 overflow-x-auto'} rounded-md font-medium`}

            />}
            {type === 'textarea' && <textarea
                disabled={disabled}
                type={type}
                name={id}
                id={id}
                key={id}
                placeholder={placeholder}
                css={style}
                onChange={handleInputValue}
                value={value}
                autoComplete="true"
                style={{ resize: "none" }}
                className={`custom-scrollbar ${error ? 'border-2 border-red-800' : 'border border-gray-400'} px-2 ${height ? 'py-0.5' : 'py-2'} rounded-md font-medium`}

            />}
        </div>
    )
}

export default Input