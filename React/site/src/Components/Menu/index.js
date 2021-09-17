import { Container } from './styled.js';

export default function Index() {
    return (
        <Container>
            <header className="header-left-box">
                <div className="svg-cabecalho-left-box"> <img src=""/></div>
                <div className="titulo-site"> <span>Dev</span>School</div>
            </header>
            <div className="black-box"></div>
            <div className="left-box-gerenciamento">
                <div>Gerenciamento</div>
                <img src=""/>
            </div>
            <div className="left-box-alunos">
                <div>Alunos</div>
            </div> 
        </Container>
    );
};