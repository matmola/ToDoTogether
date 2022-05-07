import React, {useState} from 'react'

const SignupForm = () => {

            const [values, setValues] = useState({
                fullname:"",
                id:"",
                email:"",
                password:"",
            });

        const handleChange = (event) =>{
            setValues({
                ...values,
                [event.target.name] : event.target.value, 
            })
        }
        const handleFormSubmit = (event) =>{
            event.preventDefault();
        };
    return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Create Account</h2>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>이름</label>
                    <input 
                    className='input' 
                    type='text' 
                    name='fullname'
                    value={values.fullname}
                    onChange={handleChange}
                    />
                </div>
                <div className='name'>
                    <label className='label'>아이디</label>
                    <input 
                    className='input' 
                    type='text' 
                    name='id' 
                    value={values.id} 
                    onChange={handleChange}
                    />
                </div>
                <div className='email'>
                    <label className='label'>이메일</label>
                    <input 
                    className='input' 
                    type='email' 
                    name='email' 
                    value={values.email}
                    onChange={handleChange}
                    />
                </div>
                <div className='password'>
                    <label className='label'>비밀번호</label>
                    <input 
                    className='input' 
                    type='password' 
                    name='password' 
                    value={values.password} 
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <button className="submit" onClick={handleFormSubmit}>가입</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default SignupForm