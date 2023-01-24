import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefa";
import TipoFiltro from "../model/TipoFiltro";

const listaTarefasIniciais: Tarefa[] = [
  Tarefa.criarAtiva(1, "Estudar Next"),
  Tarefa.criarConcluida(2, "Limpar carro"),
  Tarefa.criarAtiva(3, "Comprar livro do mês"),
];

const listaTarefas = new ListaTarefas(listaTarefasIniciais, TipoFiltro.NENHUM);

export default listaTarefas;
