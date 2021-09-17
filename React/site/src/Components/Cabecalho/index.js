import { Container } from './styled.js';

export default function Index() {
    return (
        <Container>
            <div class="reader-right-box">
                <div class="box-usuario"> 
                    <div class="usuario-imagem">
                        <img src=""/>
                        <div class="absolute">3</div>
                    </div>
                    <div class="usuario-nome"> Olá, <b>Bruno de Oliveira</b> </div>
                </div>
                <div class="box-imagem">
                    <div class="botao-refresh"> <button> <img src=""/> </button> </div>
                    <div class="botao-left"> <button> <img src=""/> </button> </div>
                </div>
            </div>
            <div class="bottom-bar-right-header" />
        </Container>
    );
};