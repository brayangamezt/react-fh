import React, {useState} from 'react'

export const useForm = (initialForm = {}) => {

    const [form,setForm ] = useState(initialForm);

    //Estamos extrayendo el target que viene en el evento
    const onInputChange = ({target}) =>{
        const {name, value} = target;
        setForm({
          ...form,
          [name]:value
        });
    }

    const onReset = () =>{
        setForm(initialForm)
    }
  
  return {
    form,
    onInputChange,
    onReset
  }
}
