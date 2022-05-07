import React from 'react'

const SignupForm = () => {
    return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Create Account</h2>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>이름</label>
                    <input className='input' type='text'/>
                </div>
                <div className='name'>
                    <label className='label'>아이디</label>
                    <input className='input' type='text'/>
                </div>
                <div className='email'>
                    <label className='label'>이메일</label>
                    <input className='input' type='email'/>
                </div>
                <div className='password'>
                    <label className='label'>비밀번호</label>
                    <input className='input' type='password'/>
                </div>
                <div>
                    <button className="submit">가입</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default SignupForm