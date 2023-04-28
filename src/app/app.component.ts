import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  CodigoRMA : number = 2203657;
  Nome : string = "Kenny";
  nota1 : number = 5;
  nota2 : number = 5;
  nota3 : number = 2;
  nota4 : number = 2;
  media : number = (this.nota1 + this.nota2 + this.nota3 + this.nota4)/4
  imagem : string = "../assets/img/kenny.jpg"


  CodigoRMA2 : number = 2203689;
  Nome2 : string = "Kyle";
  nota5 : number = 8;
  nota6 : number = 5;
  nota7 : number = 9;
  nota8 : number = 8;
  media2 : number = (this.nota5 + this.nota6 + this.nota7 + this.nota8)/4
  imagem2 : string = "../assets/img/kyle.jpg";

  CodigoRMA3: number = 2203327;
  Nome3 : string = "Stan";
  nota33 : number = 7;
  nota44 : number = 6;
  nota55 : number = 4;
  nota66 : number = 10;
  media3 : number = (this.nota33 + this.nota44 + this.nota55+ this.nota66)/4
  imagem3 : string = "../assets/img/stan.jpg"


  CodigoRMA4 : number = 2203629;
  Nome77 : string = "Butters";
  nota88 : number = 8;
  nota99 : number = 7;
  nota00 : number = 10;
  nota11 : number = 8;
  media22 : number = (this.nota11 + this.nota88 + this.nota99 + this.nota00)/4
  imagem4: string = "../assets/img/butters.jpg";

  CodigoRMA5: number = 2204657;
  Nome5 : string = "Token";
  nota9 : number = 7;
  nota10 : number = 8;
  nota12 : number = 7;
  nota13 : number = 6;
  media14 : number = (this.nota9 + this.nota10 + this.nota12 + this.nota13)/4
  imagem5 : string = "../assets/img/token.jpg"


  CodigoRMA6 : number = 2205689;
  Nome001 : string = "Toalinha";
  nota002 : number = 1;
  nota003 : number = 2;
  nota004 : number = 0;
  nota005 : number = 1;
  media006 : number = (this.nota002 + this.nota003 + this.nota004 + this.nota005)/4
  imagem6 : string = "../assets/img/toalinha.jpg";

  CodigoRMA7 : number = 2203699;
  Nome111 : string = "Wendy";
  nota112 : number = 10;
  nota113 : number = 10;
  nota114 : number = 9;
  nota115 : number = 8;
  media7 : number = (this.nota112 + this.nota113 + this.nota114 + this.nota115)/4
  imagem7 : string = "../assets/img/wendy.jpg"


  CodigoRMA8 : number = 2205789;
  Nome221 : string = "Cartman";
  nota222 : number = 4;
  nota223 : number = 3;
  nota224 : number = 8;
  nota225 : number = 9;
  media8 : number = (this.nota222 + this.nota223 + this.nota224 + this.nota225)/4
  imagem8 : string = "../assets/img/cartman.jpg";



}
