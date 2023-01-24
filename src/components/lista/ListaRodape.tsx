import ListaTarefas from "../../model/ListaTarefas";
import ListaBotao from "./ListaBotao";

interface IProps {
  listaTarefas: ListaTarefas;
  mudou: (listaTarefas: ListaTarefas) => void;
}

export default function ListaRodape(props: IProps) {
  const { listaTarefas, mudou } = props;

  function renderizarQtdeDeItens() {
    return (
      <>
        <span className="text-gray-300 hidden lg:inline">
          {listaTarefas.quantidade}
          {listaTarefas.quantidade === 0
            ? " Nenhuma Tarefa Encontrada"
            : listaTarefas.quantidade === 1
            ? " Tarefa Encontrada"
            : " Tarefas Encontradas"}
        </span>
        <span className="flex-1 hidden lg:inline"></span>
      </>
    );
  }

  function renderizarBotoesFiltro() {
    return (
      <>
        <ListaBotao
          selecionado={listaTarefas.exibindoTodas()}
          onClick={() => mudou(listaTarefas.removerFiltro())}
          className={"hidden md:inline"}
        >
          Todas
        </ListaBotao>
        <ListaBotao
          selecionado={listaTarefas.exibindoSomenteAtivas()}
          onClick={() => mudou(listaTarefas.filtrarAtivas())}
          className="mx-4"
        >
          Ativas
        </ListaBotao>
        <ListaBotao
          selecionado={listaTarefas.exibindoSomenteConcluidas()}
          onClick={() => mudou(listaTarefas.filtrarConcluidas())}
        >
          Concluídas
        </ListaBotao>
      </>
    );
  }

  function renderizarExcluirConcluidas() {
    return (
      <>
        <span className="flex-grow"></span>
        <ListaBotao onClick={() => mudou(listaTarefas.excluirConcluidas())}>
          Excluir <span className="hidden md:inline">Concluídas</span>
        </ListaBotao>
      </>
    );
  }

  return (
    <li className="flex p-5">
      {renderizarQtdeDeItens()}
      {renderizarBotoesFiltro()}
      {renderizarExcluirConcluidas()}
    </li>
  );
}
