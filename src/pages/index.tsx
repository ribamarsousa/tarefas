import { useState } from "react";
import Formulario from "../components/formulario/Formulario";
import Lista from "../components/lista/Lista";
import Cabecalho from "../components/template/Cabecalho";
import Conteudo from "../components/template/Conteudo";
import listaTarefasIniciais from "../data/mock";
import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefa";

export default function Home() {
  const [listaTarefas, setListaTarefas] =
    useState<ListaTarefas>(listaTarefasIniciais);

  function mudou(novaListaTarefas: ListaTarefas) {
    setListaTarefas(novaListaTarefas);
  }

  function novaTarefaCriada(novaTarefa: Tarefa) {
    setListaTarefas(listaTarefas.adicionarTarefa(novaTarefa));
  }

  return (
    <div className={`flex flex-col h-screen bg-gray-300`}>
      <Cabecalho>
        <Formulario novaTarefaCriada={novaTarefaCriada} />
      </Cabecalho>
      <Conteudo>
        <Lista listaTarefas={listaTarefas} mudou={mudou} />
      </Conteudo>
    </div>
  );
}
