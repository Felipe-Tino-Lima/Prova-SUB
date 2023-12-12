import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Imc } from "src/app/models/imc.models";

@Component({
  selector: "app-listar-imc",
  templateUrl: "./listar-imc.component.html",
  styleUrls: ["./listar-imc.component.css"],
})
export class ListarImcComponent {
  colunasTabela: string[] = [
    "id",
    "nome",
    "nascimento",
    "altura",
    "peso",
    "Imc",
    "classificacao",
    "criadoEm",
    "deletar",
    "alterar",
  ];

  imcs : Imc[] = [];

  constructor(
    private client: HttpClient, 
    private snackBar: MatSnackBar
  ) {}

 
  ngOnInit(): void {
    this.client
      .get<Imc[]>("https://localhost:4200/api/imc/listar")
      .subscribe({
      
        next: (imcs) => {
          this.imcs = imcs;
        },
      
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  deletar(imcId: number) {
    this.client
      .delete<Imc[]>(
        `https://localhost:4200/api/imc/deletar/${imcId}`
      )
      .subscribe({
        
        next: (imcs) => {
          this.imcs = imcs;
          this.snackBar.open("IMC deletado com sucesso!!", "Felipe_Lima_DB", {
            duration: 1500,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        },
       
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}





