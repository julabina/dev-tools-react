import React, { useState } from 'react';
import './BackgroundGen.css'

const BackgroundGen = () => {

    const [dataCopy, setDataCopy] = useState({
        value: "background: linear-gradient(#f3f3f3, #807DC2);",
        copied: false
    })

    const [colors, setColors] = useState({
        firstColor : "#f3f3f3",
        secondColor : "#807DC2"
    });

    const changeColor = (e) => {
        if(e.target.classList.contains("inp-color1")) {
            const newObj = {
                ...colors,
                firstColor: e.target.value
            };
            setColors(newObj);
            const newDataCopy = {
                ...dataCopy,
                copied : false,
                value : 'background: linear-gradient(' + e.target.value + ', ' + colors.secondColor + ');'
            }
            setDataCopy(newDataCopy);
        } else if (e.target.classList.contains("inp-color2")) {
            const newObj = {
                ...colors,
                secondColor: e.target.value
            };
            setColors(newObj);
            const newDataCopy = {
                ...dataCopy,
                copied : false,
                value : 'background: linear-gradient(' + colors.firstColor + ', ' + e.target.value + ');'
            }
            setDataCopy(newDataCopy);
        }
    }
    
    const handleCopy = () => {
        navigator.clipboard.writeText(dataCopy.value);
        const newObj = {
            ...dataCopy,
            copied: true
        };
        setDataCopy(newObj);
    }

    return (
        <main style={{background : 'linear-gradient(' + colors.firstColor + ',' + colors.secondColor + ')'}}>
            <section className='main-container'>
            <h1>Background generator</h1>
                <div className="option-container">
                    <div className="color-container color-container_1">
                        <label htmlFor="color1">Color 1</label>
                        <input onChange={changeColor} type="color" id="color1" value={colors.firstColor}  className="inp-color1"/>
                    </div>
                    <div className="color-container color-container_2">
                        <label htmlFor="color2">Color 2</label>
                        <input onChange={changeColor} type="color" id="color2" value={colors.secondColor} className="inp-color2" />
                    </div>
                </div>
                <div className="result-container">
                    <p>{dataCopy.value}</p>
                    <button onClick={handleCopy}>{dataCopy.copied ? "Copied" : "Copy"}</button>
                </div>
            </section>
        </main>
    );
};

export default BackgroundGen;