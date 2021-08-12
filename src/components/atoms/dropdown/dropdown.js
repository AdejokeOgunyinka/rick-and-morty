import { DropdownContainer, CustomDropdownStyle } from './dropdown.style';
import Select from 'react-select';

const Dropdown = ({options, placeholder, onChange}) => {
    return (
        <DropdownContainer>
            <Select 
                className="select" 
                placeholder={placeholder} 
                options={options} 
                styles={CustomDropdownStyle} 
                onChange={onChange}
            />
        </DropdownContainer>
    )
}

export default Dropdown;
