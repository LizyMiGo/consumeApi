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

  principalList: PrincipalInterface []=[];
  constructor(private principalService: PrincipalService) {}
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.principalService.getProducts().subscribe({
      next: (result) =>  {
        this.principalList = result;
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
}

export interface PrincipalInterface{
  userId: number;
  id: number;
  title: string;
  body: string;
}

