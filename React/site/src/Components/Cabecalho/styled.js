import styled from 'styled-components';

const Container = styled.div`
.reader-right-box {
    display: flex;
    flex-direction: row;
    background-color:  #fff;
    padding: 1.3em;
    align-items: center;
    justify-content: space-between;
}

.usuario-nome {
    padding-left: 1em;
    font-size: 16px;
}

.usuario-nome b {
    color: #4a4a4a;
}

.botao-left button {
    border-radius: 50%;
    background-color: #986CDF;
    width: 44px;
    height: 44px;
    border: none;
    margin: .4em;
}

.botao-refresh button {
    border-radius: 50%;
    background-color: #986CDF;
    width: 44px;
    height: 44px;
    border: none;
    margin: .4em;
      
}

.box-imagem {
    display: flex;
    flex-direction: row;
    padding: 0.5em;
}

.box-usuario {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.bottom-bar-right-header {
    border-bottom: .5px solid #e9e9e9;
    width: 97%;
    align-self: center;
    background-color: #e9e9e9;
}
`;

export { Container };