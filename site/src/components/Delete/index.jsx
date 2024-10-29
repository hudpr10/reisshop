/* eslint-disable react/prop-types */
import Button from '../Button'
import { BlackScreen } from '../Modal/style'
import { AreUSure } from './style'

function Delete({ close, removeProduct }) {
    return (
        <>
            <BlackScreen />
            <AreUSure>
                <h2>Tem certeza que quer apagar esse produto?</h2>
                <div>
                    <Button title="Cancelar" handleClick={() => close()} />
                    <Button title="Apagar" bgcolor="red" handleClick={() => removeProduct()} />
                </div>
            </AreUSure>
        </>
    )
}

export default Delete