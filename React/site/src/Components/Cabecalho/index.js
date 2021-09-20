import { Container } from './styled.js';

export default function Index() {
    return (
        <Container>
            <div class="reader-right-box">
                <div class="box-usuario"> 
                    <div class="usuario-imagem">
                        <img src="/Assets/Images/Imagem-Usuário.jpg"/>
                        <div class="absolute">3</div>
                    </div>
                    <div class="usuario-nome"> Olá, <b>Levi Guimarães</b> </div>
                </div>
                <div class="box-imagem">
                    <div class="botao-refresh"> <button> <img src="/Assets/Images/Ícone-Carregar.png"/> </button> </div>
                    <div class="botao-left"> <button> <img src="/Assets/Images/Ícone-Logout.svg"/> </button> </div>
                </div>
            </div>
            <div class="bottom-bar-right-header" />
        </Container>
    );
};