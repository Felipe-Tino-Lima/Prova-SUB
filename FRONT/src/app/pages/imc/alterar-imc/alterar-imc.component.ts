import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario } from "src/app/models/usuario.models";
import { Imc } from "src/app/models/imc.models";


@Component({
  selector: "app-alterar-imc",
  templateUrl: "./alterar-imc.component.html",
  styleUrls: ["./alterar-imc.component.css"],
})
export class AlterarImcComponent {
  altura : string = "";
  peso : string = "";
  usuarioId : number = 0;
  usuarios : Usuario[] = [];


  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parametros) => {
        let { id } = parametros;
    
      },
    });
  }

  alterar() : void {
    let imc : Imc = {
      altura : Number.parseFloat(this.altura),
      peso : Number.parseFloat(this.peso),
      usuarioId : this.usuarioId
    }
}
}