/* eslint-disable react/prop-types */
import { InputText, ErrorMsg } from "./style"

function ModalInput({ title, inputValue, step, handleType, handleBlur, error, type="text" }) {
    return (
        <InputText>
            <label htmlFor={title}>{title}</label>
            <input 
                onChange={(e) => handleType(e.target.value)}
                onBlur={() => handleBlur(inputValue)}
                value={inputValue}
                type={type}
                step={type === "number" ? step : null}
                id={title} 
                required 
            />
            {error === "" ? null : <ErrorMsg>{error}</ErrorMsg>}
        </InputText>
    )
}

export default ModalInput