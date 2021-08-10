import styled from 'styled-components';

export const DropdownContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border: 2px solid #2F4368;
    box-sizing: border-box;
    border-radius: 10px;

    .select {
        width: 100%;
        height: 100%;
    }

    .css-yk16xz-control {
        background-color: transparent;
        align-self: center;
        width: 97%;
        height: 100%;
        box-shadow: none;
        border: none;

    }

    .css-1wa3eu0-placeholder {
        color: #2F4368;
    }

    .css-1okebmr-indicatorSeparator {
        background-color: #2F4368;
    }

    .css-g1d714-ValueContainer {
        outline: none;
    }

    .css-tj5bde-Svg {
        fill: #2F4368;
    }
`;

export const CustomDropdownStyle = {
    control: (provided, state) => ({
        // none of react-select's styles are passed to <Control />

        ...provided,
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        boxShadow: state.isFocused ? 'unset !important' : 'none',
        border: state.isFocused ? 'none': 'none',
        borderColor: state.isFocused ? 'unset !important' : 'none'
      }),
};
