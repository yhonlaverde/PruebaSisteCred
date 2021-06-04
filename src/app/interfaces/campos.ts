export class Campos {
    esObligatorio: boolean;
    id: number;
    descripcion?: string;
    valor?: Filtros;
    options?: Filtros[];
    idPadre: number;
    metaDato?: string;
    value?: string;
    configs: {
      disabled: boolean;
    };
  }

  export interface Filtros {
    id: number;
    valor: string;
  }