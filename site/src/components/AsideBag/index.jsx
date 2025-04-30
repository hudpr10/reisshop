import closeIcon from '../../assets/fechar.svg'
import RoundedButton from '../RoundedButton';
import { AsideBagStyled } from "./style";

function AsideBag() {
    return (
        <AsideBagStyled>
            <header>
                <span>Sacola de Produtos</span>
                <RoundedButton 
                    icon={closeIcon}
                    bgcolor={""}
                />
            </header>
        </AsideBagStyled>
    )
} 

export default AsideBag;