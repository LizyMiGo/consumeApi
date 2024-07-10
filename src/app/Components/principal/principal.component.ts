import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../../Services/principal.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{
  constructor(private principalService: PrincipalService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getProducts(){
    this.principalService.getProducts().subscribe({
      next: (result) =>  {

      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
}

