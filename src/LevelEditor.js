import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import {deleteLevel, repriceLevel, shiftLevel} from "./actionCreators";

function LevelEditor({max, price, typeIndex, levelIndex, repriceLevel, shiftLevel, deleteLevel, exclude}) {
    const formatNumber = (n, p) => {
        const value = ('' + n).replace(/^0+(.)/, '$1').replace(/[^\d,]+/g, '').replace(/(,[^,]*),.*/g, '$1').replace(/^,/, '0,');
        return value.match(/^0?$/)
            ? value
            : value[0]
            + value
                .replace(/^.|,.*/g, '').split('').reverse().join('')
                .replace(/(\d{3})/g, '$1.').split('').reverse().join('')
            + value.replace(/^[^,]+/, '').substr(0, p + 1);
    };
    const [maxState, setMaxState] = useState(formatNumber(('' + max).replace('.', ','), 1));
    const [priceState, setPriceState] = useState(formatNumber(('' + price).replace('.', ','), 3));
    const levelChangeComplete = () => {
        const newMax = maxState ? maxState.replace(/\./g, '').replace(',', '.') - 0 : null;
        if (exclude.indexOf(newMax) >= 0) {
            setMaxState(formatNumber(('' + max).replace('.', ','), 1));
        } else {
            shiftLevel(typeIndex, levelIndex, newMax);
        }
    }
    return (
        <td className="level">
            <button tabIndex={-1} onClick={() => deleteLevel(typeIndex, levelIndex)}>×</button>
            <div className="max">
                <input
                    type="text"
                    placeholder={'unbegrenzt'}
                    pattern={'^\\d{1,3}((\\.\\d{3})*|(\\d{3})*)(,\\d{1,3})?$'}
                    value={maxState}
                    onBlur={levelChangeComplete}
                    onChange={e => setMaxState(formatNumber(e.target.value, 2))}
                />
                <div className="unit">kWh</div>
            </div>
            <div className="price">
                <input
                    type="text"
                    placeholder={'0'}
                    pattern={'^\\d{1,3}((\\.\\d{3})*|(\\d{3})*)(,\\d{1,3})?$'}
                    value={priceState}
                    onBlur={() => repriceLevel(typeIndex, levelIndex, priceState.replace(/\./g, '').replace(',', '.') - 0)}
                    onChange={e => setPriceState(formatNumber(e.target.value, 3))}
                />
                <div className="unit">¢/kWh</div>
            </div>
        </td>
    );
}

export default connect(
    (state, props) => state.types[props.typeIndex].levels[props.levelIndex],
    {repriceLevel, shiftLevel, deleteLevel}
)(LevelEditor);
