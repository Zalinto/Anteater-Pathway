import styled, { css } from 'styled-components';
import Popup from 'reactjs-popup';

const buttonColor = "#2850FF";
const textColor = "#EAEAEA";
const toggleButtonContainerColor = "#A2A7B9";

export const MainControlsContainer = styled.div`
    width: 100%;
    height: 6rem;
    display: grid;
    font-size: 1.4rem;
    grid-template-columns: 1fr 1fr .6fr 1.4fr;
    column-gap: 2rem;
    align-items: start;
    margin-bottom: 2rem;
`;

export const AddYearForm = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 60% 5% 35%;
`;


export const MainControlButton = styled.button`
    background: none;
    border:none;
    padding: 0;
    cursor: pointer;
    outline: inherit;

    width: 100%;
    height: 3.5rem;
    border-radius: 100px;
    color: ${textColor};
    font-size: 1.5rem;
    letter-spacing: .1rem;
    background-color: ${buttonColor};

    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, .4);
    transition: all .3s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0px 3px 3px 2px rgba(0, 0, 0, .3);
    }

    &:active {
        transform: translateY(-1px);
        box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, .4);
    }
`

export const dropdownStyle = {
    control: (provided) => ({
        ...provided,
        borderRadius: '10px',
        minHeight: '3.5rem',
        height: '3.5rem',
        border: '1px solid #FEFEFE',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, .4)',
    }),

    clearIndicator: (provided) => ({
        ...provided,
        paddingRight: '4px',
    }),
}

export const dropdownErrorStyle = {
    control: (provided) => ({
        ...provided,
        borderRadius: '10px',
        minHeight: '3.5rem',
        height: '3.5rem',
        // border: '2px solid #EB6C6C',
        boxShadow: '0px 0px 3px 2px #EB6C6C',
    }),

    clearIndicator: (provided) => ({
        ...provided,
        paddingRight: '4px',
    }),
};

export const StyledPopup = styled(Popup)`
    &-arrow {
        display: none;
    }

    &-overlay {

    }

    &-content {
        color: #eaeaea;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, .4);
        height: 4rem;
    }
`;

// LoadSaveControl

export const LoadSaveForm = styled.form`
    display: grid;
    grid-template-columns: 45% 5% 50%;
    margin-right: 1rem;
`;

export const TextInputBox = styled.div`

`;


export const TextInput = styled.input`
    width: 100%;
    border-radius: 10px;
    outline: none;
    border: transparent;
    padding: .5rem 1rem;
    height: 3.5rem;
    ${({isFormValid}) => (
        isFormValid ?
        `box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, .4);`
        :
        `box-shadow: 0px 1px 3px 2px #EB6C6C;`
    )}
    
    transition: all .2s;

    &:focus {
        border: 1px solid dodgerblue;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, .4); 
    }

    ::placeholder {
        opacity: .8;
    }
`;

export const ErrorMessage = styled.p`
    display: block;
    width: 100%;
    color: #EB6C6C;
    font-weight: 400;
    margin-top: .2rem;
    font-size: 1.4rem;

    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
`;

export const ToggleButtonContainer = styled.div`
    width: 100%;
    border-radius: 100px;
    background-color: ${toggleButtonContainerColor};
    height: 3.5rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, .4);
    
`;

export const ToggleButton = styled.button`
    background: none;
    border:none;
    outline: inherit;
    display: inline-block;

    width: ${({ isSelected }) => isSelected ? '55%' : '45%' };
    height: 100%;
    border-radius: 100px;
    color: ${textColor};
    font-size: 1.5rem;
    letter-spacing: .1rem;
    transition: all .2s;
    background-color: ${({ isSelected }) => isSelected ? buttonColor : toggleButtonContainerColor};
    ${({ isSelected }) => 
        isSelected ? 
        `
        cursor: pointer;
        

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, .3);
        }

        &:active {
            transform: translateY(-1px);
            box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, .4);
        }
         
        ` 
        : ``
    }

`;