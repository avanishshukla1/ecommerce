function validation(values){
   
    let error ={}
    const password_pattern = /^[a-zA-Z0-9!@#_=+-]/g

    if (values.name === ""){
        error.name ="Name Should not be Empty"
    }
    else{
        error.name =""
    }

if (values.email === ""){
    error.email ="Email Should not be Empty"
}
else{
    error.email =""
}


if (values.password === ""){
    error.password =" Password Should not be Empty"
}
else if(!password_pattern.test(values.password)){
    error.password ="Password Didn't Match"
}
else{
    error.password=""
}
return error;
            
}

export default validation