import React from "react";
import { useState, useEffect } from 'react';
import SignupForm from "./SignupForm";
import SignupFormSuccess from "./SignupFormSuccess";

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    return (
        <div>
            {!formIsSubmitted ? (
                <SignupForm submitForm={submitForm} />
            ) : (
                <SignupFormSuccess />
            )}
        </div>
    );
};

export default Form;