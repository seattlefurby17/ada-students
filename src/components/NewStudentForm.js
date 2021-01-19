import React, { useState } from 'react';
import PropsTypes from 'prop-types';
import './NewStudentForm.css';

const NewStudentForm = (props) => {
    const [formFields, setFormFields] = useState ({
        fullName: '', //this is a student object
        email: '',
    });

    // Validate our inputs
    const validEmail = () => {
        return formFields.email.match(/\s+@\S+/) || formFields.email === '';
    }

    // event handlers
    // Dry up our code 
    const onInputChange = (event)   => {
        console.log(`Changing field ${ event.target.name } to ${ event.target.value }`)
        
        // Duplicate formFields into a new object
        const newFormFieldValues = {
            ...formFields, // rest operator puts all the field from 
        };                // formField into the new object
                        // const newFormFields = {
                        // fullName: formFields.fullName,
                        //  email: formFields.email,

        const {name, value} = event.target; //destructuring to set the field name and value
        
        // This sets newformFields to the old value of the form state
        // and then updates the one field that changed.
        newFormFieldValues[name] = value; // updated the value using the hash key
        setFormFields(newFormFieldValues); // updated the form with new values
    };

    const onFormSubmit = (event) => {
        event.preventDefault(); //prevent the page from refresh everytime 
        // Send that data back up to App
        props.onSubmitCallBack(formFields);
        // callback fundtion to update state
        setFormFields({ //this is a student object
            fullName: '', 
            email: '',
        });
    };

    return (
        <form 
            onSubmit = { onFormSubmit }
            className='new-student-form'>
            <div>
                <label htmlFor='fullName'>Name:</label>
                <input 
                    name='fullName' 
                    value={formFields.fullName}
                    onChange={onInputChange}
                />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input 
                    name='email'
                    value={formFields.email}
                    onChange={onInputChange}
                    className={validEmail() ? "valid" : "invalid"}
                    />
            </div>
            <input
                type='submit'
                value='Add Student'
            />
        </form>
    );

}
NewStudentForm.propTypes = {
    onSubmitCallBack: PropsTypes.func.isRequired,
};

export default NewStudentForm;

// const onNameChange = (event) => {
    //     console.log(`Name Field updated ${ event.target.value }`);
    //     setFormFields({ //this will update the field
    //         ...formFields,
    //         fullName: event.target.value,
    //     });
    // };

    // const onEmailChange = (event) => {
    //     console.log(`Email Field updated ${ event.target.value }`);
    //     setFormFields({ //this will update the field = setFormFields(newStudent)
    //         ...formFields,
    //         email: event.target.value,
    //     });
    // };