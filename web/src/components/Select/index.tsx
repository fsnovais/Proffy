import React, {SelectHTMLAttributes} from 'react';

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => {
    return (
        <div className="select-block">
        <label htmlFor={name}>{label}</label>
        <select id={name} value={'DEFAULT'} {...rest} >
            <option value="DEFAULT" disabled hidden>Selecione uma opção</option>
            {options.map(option => {
                return <option key={option.value} value={option.value} label={option.label}></option>
            })}
        </select>
    </div>
    )
}

export default Select;