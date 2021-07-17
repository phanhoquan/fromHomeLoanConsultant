import React from 'react';
import ReactSelect, { components } from 'react-select';
import './Select.scss';

export const InputDefault = (props) => {
    return <components.Input {...props} />;
};

export const InputWithNumeric = (props) => {
    return <components.Input inputMode="numeric" {...props} />;
};

export const MenuListDefault = (props) => {
    return <components.MenuList {...props}>{props.children}</components.MenuList>;
};

export const MenuListWithNoOption = (props) => {
    return <div style={{ display: 'none' }}></div>;
};

export const MenuDefault = (props) => {
    return <components.Menu {...props}>{props.children}</components.Menu>;
};

export const MenuWithNoOption = () => {
    return <div style={{ display: 'none' }}></div>;
};

const Select = ({ defaultValue, options, onChange, children, inputMode, autoFocus, ...otherProps }) => {
    return (
        <ReactSelect
            // menuIsOpen={true}
            autoFocus={true}
            classNamePrefix="zaselect"
            placeholder={children}
            options={options}
            maxMenuHeight="400px"
            menuShouldScrollIntoView={false}
            defaultValue={options[options.findIndex((item) => item.value === defaultValue)]}
            onChange={({ value }) => onChange(value)}
            components={{
                Input: inputMode ? InputWithNumeric : InputDefault,
                MenuList: options.length > 0 ? MenuListDefault : MenuListWithNoOption,
                Menu: options.length > 0 ? MenuDefault : MenuWithNoOption,
            }}
            {...otherProps}
        />
    );
};

export default Select;
