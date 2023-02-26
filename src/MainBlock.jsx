import React, { useState } from 'react'
import style from './mainBlock.module.css'

export const MainBlock = ({ eur, usd }) => {
    const [amount1, setAmount1] = useState()
    const [selectedValue1, setSelectedValue1] = useState("EUR")
    const [amount2, setAmount2] = useState()
    const [selectedValue2, setSelectedValue2] = useState("UAH")


    function hendleChangeToUAH(num1) {
        setAmount1(num1)
        if (selectedValue1 === "EUR" && selectedValue2 === "UAH") {
            setAmount2(Math.round((+num1 * eur) * 100) / 100)
        } else if (selectedValue1 === "EUR" && selectedValue2 === "USD") {
            setAmount2(Math.round((+num1 * eur / usd) * 100) / 100)
        } else if (selectedValue1 === "USD" && selectedValue2 === "UAH") {
            setAmount2(Math.round((+num1 * usd) * 100) / 100)
        } else if (selectedValue1 === "USD" && selectedValue2 === "EUR") {
            setAmount2(Math.round((+num1 * usd / eur) * 100) / 100)
        }
    }

    function hendleChangeFromUAH(num2) {
        setAmount2(num2)
        if (selectedValue2 === "UAH" && selectedValue1 === "EUR") {
            setAmount1(Math.round((+num2 / eur) * 100) / 100)
        } else if (selectedValue2 === "UAH" && selectedValue1 === "USD") {
            setAmount1(Math.round((+num2 / usd) * 100) / 100)
        } else if (selectedValue2 === "EUR" && selectedValue1 === "USD") {
            setAmount1(Math.round((+num2 * eur / usd) * 100) / 100)
        } else if (selectedValue2 === "USD" && selectedValue1 === "EUR") {
            setAmount1(Math.round((+num2 * usd / eur) * 100) / 100)
        }
    }


    return (
        <div className={style.block}>
            <div className="inputPartForEur">
                <input

                    type="text"
                    placeholder={`введите колличество ${selectedValue1}`}
                    value={amount1}
                    onChange={e => hendleChangeToUAH(e.target.value)}

                />
                <select name="currencies" onChange={(e) => setSelectedValue1(e.target.value)} >
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
            </div>

            <div className="inputPartForEur">
                <input
                    type="text"
                    placeholder='...'
                    value={amount2}
                    onChange={e => hendleChangeFromUAH(e.target.value)}
                />
                <select name="currencies" onChange={(e) => setSelectedValue2(e.target.value)}>
                    <option selected value="UAH">UAH</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
            </div>

        </div>
    )
}
