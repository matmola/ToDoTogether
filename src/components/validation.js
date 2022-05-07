const validation = (values) => {

    let errors ={};

    if(!values.fullname){
        errors.fullname="이름은 필수 입력값입니다."
    }
    if(!values.id){
        errors.id="아이디는 필수 입력값입니다."
    }
    if(!values.email){
        errors.email="이메일은 필수 입력값입니다."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="이메일이 유효하지 않습니다."
    }
    if(!values.password){
        errors.password="비밀번호는 필수 입력값입니다."
    } else if(values.password.length < 5){
        errors.password="비밀번호는 5자 이상이어야 합니다."
    }


    return errors;
};

export default validation;