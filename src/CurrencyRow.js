import React from 'react';

export default function CurrencyRow(props) {
    const {
        currecyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props;

    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount} />
            <select value={selectedCurrency} onChange={onChangeCurrency} >
                {currecyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}
