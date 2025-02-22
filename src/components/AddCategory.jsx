import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInpuntChange = ({ target }) => {
        setinputValue(target.value)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (value.length < 1 ) return;
        //    setCategory(category => [inputValue, ...category]);
        onNewCategory(inputValue);
        setinputValue('');
    };


    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar GIFs"
                value={inputValue}
                onChange={onInpuntChange}
            />
        </form>

    )
}
