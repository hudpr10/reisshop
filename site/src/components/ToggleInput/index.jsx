/* eslint-disable react/prop-types */
import { useState } from "react"
import { InputContainer } from "./style"

function ToggleInput({ title, handleClick }) {
    const [toggleActive, setToggleActive] = useState(true)

    function toggleButton() {
        setToggleActive(!toggleActive)
        handleClick(toggleActive)
    }

    return (
        <InputContainer $toggleActive={toggleActive}>
            <span htmlFor="autopreco" onClick={() => toggleButton()}></span>
            <input type="checkbox" id="autopreco" defaultChecked={toggleActive} onClick={() => toggleButton()} />
            <label htmlFor="autopreco">{title}</label>
        </InputContainer>
    )
}

export default ToggleInput