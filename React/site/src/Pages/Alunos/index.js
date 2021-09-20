import { Container, Elementos } from './styled.js';

import { useState, useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Cabecalho from '../../Components/Cabecalho';
import Menu from '../../Components/Menu';

import Api from '../../Service/api.js';
const api = new Api();

export default function Index() {
    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState('');
    const [chamada, setChamada] = useState('');
    const [turma, setTurma] = useState('');
    const [curso, setCurso] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);
    const loading = useRef(null);

    async function revisarErro(error){
        if (!error.e) 
            return true;
        toast.error(`${error.e}`);
            return false;
    };

    async function listarAluno() {
        loading.current.continuousStart();
        let r = await api.listar();
        setAlunos(r);
        loading.current.complete();
    };

    async function inserirAluno() {
        if (nome === '')
            return toast.error('Campo de Nome Precisa Ser Preenchido!');
        
        if (chamada <= 0)
            return toast.error('Campo de Número Precisa Ser Maior que 0!');

        if (turma === '')
            return toast.error('Campo de Turma Precisa Ser Preenchido!');

        if (curso === '')
            return toast.error('Campo de Curso Precisa Ser Preenchido!');

        if (idAlterando === 0) {
            let e = await api.inserir(nome, chamada, curso, turma);
            if (!revisarErro(e))
                return toast.success(`Aluno ${nome} Cadastrado!`);
            } else {
            let e = await api.alterar(idAlterando, nome, chamada, curso, turma);
            if (!revisarErro(e))
                return toast.success(`Aluno ${nome} Alterado!`);
            };

        listarAluno();
        limparCampos();
    };

    async function limparCampos() {
        setNome('');
        setChamada('');
        setTurma('');
        setCurso('');
        setIdAlterando(0);
    };

    async function removerAluno() {
        confirmAlert({
            title: 'Remover Aluno',
            message: `Você Realmente Deseja Remover o Aluno ${nome}} ?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        let r = await api.remover(alunos);
                        toast.success(`Aluno ${nome} Removido com Sucesso!`)
                        listarAluno();
                    }
                },
            {
                label: 'Não',
            }
            ]
        });
    };

    async function editarAluno(item) {
        setNome(item.nm_aluno);
        setChamada(item.nr_chamada);
        setTurma(item.nm_turma);
        setCurso(item.nm_curso);
        setIdAlterando(item.id_matricula);
    };

    useEffect(() => {
        listarAluno();
    }, []);

    return (
        <Container>
            <Menu />
            <ToastContainer />
            <LoadingBar color="986CDF" ref={loading} />
            <Elementos>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="novo-estudante-box">
                        <div class="text-novo-estudante">
                            <div class="bar-novo-estudante"></div>
                            <div class="text-novo-etudante"> {idAlterando == 0 ? "Novo Aluno" : "Alterando Aluno " + idAlterando}</div>
                        </div>
                        <div class="input-novo-estudante"> 
                            <div class="input-left">
                                <div class="agp-input"> 
                                    <div class="nome-estudante">Nome:</div>  
                                    <div class="input"> <input type="text" value={nome} onChange={e => setNome(e.target.value)}/> </div>  
                                </div> 
                                <div class="agp-input">
                                    <div class="numero-estudante">Chamada:</div>  
                                    <div class="input"> <input type="text" value={chamada} onChange={e => setChamada(e.target.value)}/> </div> 
                                </div>
                            </div>
                            <div class="input-right">
                                <div class="agp-input">
                                    <div class="curso-estudante">Curso:</div>  
                                    <div class="input"> <input type="text" value={curso} onChange={e => setCurso(e.target.value)}/> </div>  
                                </div>
                                <div class="agp-input">
                                    <div class="turma-estudante">Turma:</div>  
                                    <div class="input"> <input type="text" value={turma} onChange={e => setTurma(e.target.value)}/> </div> 
                                </div>
                            </div>
                            <div class="botao-criar"> <button onClick={inserirAluno}> {idAlterando == 0 ? "Cadastrar" : "Alterar"} </button> </div>
                        </div>
                    </div>
                    <div class="estudante-registrado-box">
                        <div class="row-bar"> 
                            <div class="bar-novo-estudante"> </div>
                            <div class="text-estudante-registrado">Alunos Matriculados</div>
                        </div>
                        <table class ="tabela-usuario">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Chamada</th>
                                    <th>Turma</th>
                                    <th>Curso</th>
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {alunos.map((item, i) =>
                                    <tr className={i % 2 == 0 ? "linha-alternada" : ""}>
                                        <td> {item.id_matricula} </td>
                                        <td title={item.nm_aluno}>
                                            {item.nm_aluno != null && item.nm_aluno.length >= 25
                                                ? item.nm_aluno.substr(0, 25) + '...'
                                                : item.nm_aluno}
                                        </td>
                                        <td> {item.nr_chamada} </td>
                                        <td> {item.nm_turma} </td>
                                        <td> {item.nm_curso} </td>
                                        <td className="coluna-acao"> <button onClick={() => editarAluno(item)}> <img src="/Assets/Images/Ícone-Editar.svg"/> </button> </td>
                                        <td className="coluna-acao"> <button onClick={() => removerAluno(item.id_matricula)}> <img src="/Assets/Images/Ícone-Remover.svg"/> </button> </td>
                                    </tr>
                                )};
                            </tbody> 
                        </table>
                    </div>
                </div>
            </Elementos>
        </Container>
    );
};