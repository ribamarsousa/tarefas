import ListaTarefas from "../../model/ListaTarefas";
import ListaItem from "./ListaItem";
import ListaRodape from "./ListaRodape";

interface IProps {
  listaTarefas: ListaTarefas;
  mudou: (listaTarefas: ListaTarefas) => void;
}

export default function Lista(props: IProps) {
  const { listaTarefas } = props;

  function renderizarListaTarefas() {
    return listaTarefas.itens.map((tarefa) => {
      return (
        <ListaItem
          key={tarefa.id}
          valor={tarefa.descricao}
          concluido={tarefa.concluida}
          alterarStatus={() => {
            const tarefaModificada = tarefa.alternarStatus();
            const novaLista = listaTarefas.modificarTarefa(tarefaModificada);
            props.mudou(novaLista);
          }}
        />
      );
    });
  }

  return (
    <div className={`flex w-3/5 items-start relative`}>
      <ul
        className={`
                absolute -top-14
                w-full list-none
                bg-white shadow-lg rounded-lg
            `}
      >
        {renderizarListaTarefas()}
        <ListaRodape listaTarefas={props.listaTarefas} mudou={props.mudou} />
      </ul>
    </div>
  );
}
