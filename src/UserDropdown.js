import React, {useState} from 'react';
import './Form.css';
// import Name from './Name.js';


function UserDropdown({updateUser, formActive}) {
    const [isOpen, setIsOpen] = useState(false);
    var [userSelected, setUserSelected] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (user) => {
        setIsOpen(false); // Close the dropdown on item click
        setUserSelected(true)
        updateUser(user)
    };

    return (
        <>
            <div className={userSelected ? "userDisapear userSelectBackground": "userSelectBackground"}>

            </div>

            <div className={userSelected ? "userDisapear dropdown": "dropdown"}>
                
                <p className='helpInstruction'>On the next page, click the <span className="purpleQ">? </span>in the top-right corner for help or to read the rules</p>
                <button onClick={toggleDropdown} >
                    ¿Quien Eres?
                </button>
                {true && (
                    <ul className="dropdown-menu">
                    <li onClick={() => handleItemClick('ANA PAULA')}>ANA PAULA</li>
                    <li onClick={() => handleItemClick('ANDRES')}>ANDRES</li>
                    <li onClick={() => handleItemClick('FABIAN')}>FABIAN</li>
                    <li onClick={() => handleItemClick('DIEGO')}>DIEGO</li>
                    <li onClick={() => handleItemClick('MAMI')}>MAMI</li>
                    <li onClick={() => handleItemClick('PAPI')}>PAPI</li>
                    </ul>
                )}
            </div>
        </>
    );
}
  
export default UserDropdown;