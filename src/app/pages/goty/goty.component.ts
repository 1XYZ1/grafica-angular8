import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service'
import { Game, Votos } from '../../interfaces/interface';

import Swal from 'sweetalert2'

import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];
  votos: Votos[] = [];
  
  constructor(private gameService: GameService, private toastr: ToastrService, private db: AngularFirestore) { }

  ngOnInit() {
    this.gameService.getNominados().subscribe(resp => {
       console.log(resp);
      this.juegos = resp;
      
    })


    this.db.collection('goty').valueChanges()
    .pipe(
      map((resp: Game[]) => {
        // return resp.map(({name, votos}) => ({name, value: votos}))
        return resp.map( (juego) => {
          return {
            votos: juego.votos
          }
        })
      })
    )
    .subscribe( (votos: Votos[]) => {
       console.log(votos)
       this.votos = votos;
    })

  }

  votarJuego(juego){

    this.gameService.votarJuego(juego.id).subscribe( (resp:{ok:boolean, mensaje: string} ) => {
      if (resp.ok){
         Swal.fire('Gracias', resp.mensaje, "success")
        // this.toastr.success(resp.mensaje, 'Successfull operation!!')

      } else {
        this.toastr.error('ERROR', 'NO ID')

        // Swal.fire('Oops', resp.mensaje, "error")
      }
    })
  }

}
