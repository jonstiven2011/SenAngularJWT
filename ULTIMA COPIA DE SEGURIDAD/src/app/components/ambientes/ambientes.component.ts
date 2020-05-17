import { Component, OnInit } from '@angular/core';
import { Ambientes } from 'src/app/models/ambientes';
import { AmbientsService } from 'src/app/services/ambients.service';

@Component({
  selector: 'app-ambientes',
  templateUrl: './ambientes.component.html',
  styleUrls: ['./ambientes.component.css']
})
export class AmbientesComponent implements OnInit {

  ambientes: Ambientes[];

  constructor(private service: AmbientsService) { }

  ngOnInit(): void {
    this.service.getAllAmbients().subscribe(
      next => this.ambientes = next
    )
  }

}
