import Tarefa from "./Tarefa";
import TipoFiltro from "./TipoFiltro";

export default class ListaTarefas {
  #todasTarefas: Tarefa[];
  #filtroUtilizado: TipoFiltro;

  constructor(todasTarefas: Tarefa[], filtroUtilizado = TipoFiltro.NENHUM) {
    this.#todasTarefas = todasTarefas;
    this.#filtroUtilizado = filtroUtilizado ?? TipoFiltro.NENHUM;
  }

  get itens() {
    return this.aplicarFiltroEm(this.#todasTarefas);
  }

  get quantidade() {
    return this.itens.length;
  }

  get filtroUtilizado() {
    return this.#filtroUtilizado;
  }

  adicionarTarefa(novaTarefa: Tarefa): ListaTarefas {
    const todas = [...this.#todasTarefas];
    todas.push(novaTarefa);
    return new ListaTarefas(todas, this.filtroUtilizado);
  }

  modificarTarefa(tarefaModificada: Tarefa): ListaTarefas {
    const todas = this.#todasTarefas.map((tarefa) => {
      return tarefa.id === tarefaModificada.id ? tarefaModificada : tarefa;
    });

    return new ListaTarefas(todas, this.filtroUtilizado);
  }

  filtrarAtivas(): ListaTarefas {
    if (!this.exibindoSomenteAtivas()) {
      return new ListaTarefas(this.#todasTarefas, TipoFiltro.ATIVAS);
    } else {
      return this;
    }
  }

  excluirConcluidas(): ListaTarefas {
    const somenteAivas = this.#todasTarefas.filter((tarefa) => tarefa.ativa);
    return new ListaTarefas(somenteAivas, TipoFiltro.NENHUM);
  }

  filtrarConcluidas(): ListaTarefas {
    if (!this.exibindoSomenteConcluidas()) {
      return new ListaTarefas(this.#todasTarefas, TipoFiltro.CONCLUIDAS);
    } else {
      return this;
    }
  }

  removerFiltro(): ListaTarefas {
    if (!this.exibindoTodas()) {
      return new ListaTarefas(this.#todasTarefas, TipoFiltro.NENHUM);
    } else {
      return this;
    }
  }

  exibindoTodas(): boolean {
    return this.filtroUtilizado === TipoFiltro.NENHUM;
  }

  exibindoSomenteAtivas(): boolean {
    return this.filtroUtilizado === TipoFiltro.ATIVAS;
  }

  exibindoSomenteConcluidas(): boolean {
    return this.filtroUtilizado === TipoFiltro.CONCLUIDAS;
  }

  private aplicarFiltroEm(tarefas: Tarefa[]): Tarefa[] {
    if (this.exibindoSomenteAtivas()) {
      return this.aplicarFiltroAtivas(tarefas);
    } else if (this.exibindoSomenteConcluidas()) {
      return this.aplicarFiltroConcluidas(tarefas);
    } else {
      return [...tarefas];
    }
  }

  private aplicarFiltroAtivas(tarefas: Tarefa[]): Tarefa[] {
    return tarefas.filter((tarefa) => tarefa.ativa);
  }

  private aplicarFiltroConcluidas(tarefas: Tarefa[]): Tarefa[] {
    return tarefas.filter((tarefa) => tarefa.concluida);
  }
}
