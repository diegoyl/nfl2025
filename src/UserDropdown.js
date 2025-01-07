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
                    <li onClick={() => handleItemClick('Ana Paula')}>Ana Paula</li>
                    <li onClick={() => handleItemClick('Andres')}>Andres</li>
                    <li onClick={() => handleItemClick('Fabian')}>Fabian</li>
                    <li onClick={() => handleItemClick('Diego')}>Diego</li>
                    <li onClick={() => handleItemClick('Mami')}>Mami</li>
                    <li onClick={() => handleItemClick('Papi')}>Papi</li>
                    </ul>
                )}
            </div>
        </>
    );
}
  
export default UserDropdown;