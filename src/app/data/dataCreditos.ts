import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({ providedIn: "root" })
export class DataCreditos {
    constructor() { }
    fields: any[];

    newCredito() {
        this.fields = [
            {
                valor: "",
                metaDato: "TT",
                id: 1,
                descripcion: "Nombres",
                esObligatorio: true,
            },
            {
                valor: "",
                metaDato: "TT",
                id: 2,
                descripcion: "Apellidos",
                esObligatorio: true,
               
            },
            {
                valor: "",
                metaDato: "TT",
                id: 3,
                descripcion: "Numero de celular",
                esObligatorio: true,
            },
            {
                valor: "",
                metaDato: "TT",
                id: 4,
                descripcion: "Correo Electronico",
            },
            {
                valor: "",
                metaDato: "LT",
                id: 5,
                descripcion: "Tipo de identificación",
                esObligatorio: true,
                options: [
                    {
                        valor: 'Cedula Ciudadania'
                    },
                    {
                        valor: 'Cedula Extranjera'
                    }
                    ,
                    {
                        valor: 'Pasaporte'
                    }
                    ,
                    {
                        valor: 'otro'
                    }
                ]
            },
            {
                valor: "",
                metaDato: "TT",
                id: 6,
                descripcion: "Número de identificación",
                esObligatorio: true,
            },
            {
                valor: "",
                metaDato: "TT",
                id: 7,
                descripcion: "Dirección de residencia",
                esObligatorio: true,
            },
            {
                valor: "",
                metaDato: "TT",
                id: 8,
                descripcion: "Ubicación(Ciudad, Barrio)",
                esObligatorio: true,
            },
            {
                valor: "",
                metaDato: "TN",
                id: 9,
                descripcion: "Valor total del crédito",
                esObligatorio: true,
            },
            {
                valor: "",
                metaDato: "TN",
                id: 10,
                descripcion: "Numero de cuotas",
                esObligatorio: true,
            },
        ];

        return this.fields;
    }

    selectCredito(credito:any) {
        console.log(credito)
        this.fields = [
            {
                valor: credito.Nombres,
                metaDato: "TT",
                id: 1,
                descripcion: "Nombres",
                esObligatorio: true,
            },
            {
                valor: credito.Apellidos,
                metaDato: "TT",
                id: 2,
                descripcion: "Apellidos",
                esObligatorio: true,
               
            },
            {
                valor: credito.NumeroCelular,
                metaDato: "TT",
                id: 3,
                descripcion: "Numero de celular",
                esObligatorio: true,
            },
            {
                valor: credito.CorreoElectronico,
                metaDato: "TT",
                id: 4,
                descripcion: "Correo Electronico",
                esObligatorio: true,
            },
            {
                valor: credito.TipoIdentificacion,
                metaDato: "LT",
                id: 5,
                descripcion: "Tipo de identificación",
                esObligatorio: true,
                options: [
                    {
                        valor: 'Cedula Ciudadania'
                    },
                    {
                        valor: 'Cedula Extranjera'
                    }
                    ,
                    {
                        valor: 'Pasaporte'
                    }
                    ,
                    {
                        valor: 'otro'
                    }
                ]
            },
            {
                valor:credito.NumeroIdentificacion,
                metaDato: "TT",
                id: 6,
                descripcion: "Número de identificación",
                esObligatorio: true,
                configs: {
                    disabled: true,
                },

            },
            {
                valor: credito.DireccionResidencia,
                metaDato: "TT",
                id: 7,
                descripcion: "Dirección de residencia",
                esObligatorio: true,
            },
            {
                valor: credito.Ubicacion,
                metaDato: "TT",
                id: 8,
                descripcion: "Ubicación(Ciudad, Barrio)",
                esObligatorio: true,
            },
            {
                valor: credito.ValorTotalCredito,
                metaDato: "TN",
                id: 9,
                descripcion: "Valor total del crédito",
                esObligatorio: true,
            },
            {
                valor: credito.NumeroCuotas,
                metaDato: "TN",
                id: 10,
                descripcion: "Numero de cuotas",
                esObligatorio: true,
            },
        ];

        return this.fields;
    }


}