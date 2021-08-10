import { DropdownContainer, CustomDropdownStyle } from './dropdown.style';
import Select from 'react-select';

const Dropdown = ({options, placeholder}) => {
    return (
        <DropdownContainer>
            <Select className="select" placeholder={placeholder} options={options} styles={CustomDropdownStyle} />
        </DropdownContainer>
    )
}

export default Dropdown;
