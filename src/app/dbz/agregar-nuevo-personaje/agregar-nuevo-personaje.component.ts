import { Component,Input,} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-agregar-nuevo-personaje',
  templateUrl: './agregar-nuevo-personaje.component.html',
  styleUrls: ['./agregar-nuevo-personaje.component.css']
})
export class AgregarNuevoPersonajeComponent  {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

  constructor(private DbzService: DbzService) {}

 

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }
        this.DbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: "",
      poder: 0,
    }
  }

}
