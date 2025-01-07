import './Form.css';
// import Name from './Name.js';


function SubmitForm({submitForm, setFinish, finish}) {

    // do stuff with props

    return (
        <div id="submitContainer" className={finish ? "submitFormActive submitFormInactive": "submitFormInactive"}>
            
            
            <button id="submitButton" 
                onClick={() => {submitForm()}}
                >SUBMIT<br></br>PICKS</button>


            <button id="returnButton" 
                onClick={() => {setFinish(false)}}
                >Change Picks</button>
        </div>
    );
}
  
export default SubmitForm;