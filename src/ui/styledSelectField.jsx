import React from 'react'
import styled from 'styled-components';
import Select from 'react-select';

const SelectContainer = styled.div`
  position: relative;
  width: 230px; /* Adjust width as needed */
`;



const StyledSelectField = ({ placeholder, options, onChange }) => {
    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          width: '100%',
          padding: '8px',
          border: '1px solid var(--White-20, rgba(255, 255, 255, 0.20));',
          borderRadius: '4px',
          backgroundColor: state.isFocused ? '#39383D' : 'var(--inner, #39383D)',
          color: state.isFocused ? '#fff' : '#B5B8C5',
          boxShadow: state.isFocused ? '0 0 0 2px #fff' : 'none',
          cursor: 'pointer',
          
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none', // Remove the separator
          }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? '#4a4a4a' : 'var(--inner, #39383D)',
          color: state.isFocused ? '#fff' : '#B5B8C5',
          cursor: 'pointer',
          backgroundColor: state.isSelected ? '#242424' : 'initial',
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: 'var(--inner, #39383D)',
          color: '#B5B8C5',
        }),
        singleValue: (provided) => ({
          ...provided,
          color: '##F7F8FC', // Set the text color for the selected value
        }),
      };
    
      const customTheme = (theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: 'var(--inner, #39383D)',
        },
      });
    
    
  return (
    <SelectContainer>
    <Select
    placeholder={placeholder}
    options={options}
    onChange={onChange}
    styles={customStyles}
    theme={customTheme}
  />
  </SelectContainer>
  )
}

export default StyledSelectField
