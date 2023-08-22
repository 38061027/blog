import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {



  photoCover: string = "https://variety.com/wp-content/uploads/2013/03/ironman3_poster.jpg?w=800"
  cardTitle: string = "MINHA NOTICIA"
  cardDescription:string = "Olá mundo"

}
