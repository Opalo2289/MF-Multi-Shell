import { Component } from '@angular/core';
import { CommonsLibService } from './lib/commons-lib.service';
import PubSub from 'pubsub-js';
import { ICommonProduct } from './lib/models/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _products: ICommonProduct[] = []
  count = 0

  constructor(public commonsLibService: CommonsLibService) { }

  ngOnInit(): void {
    PubSub.subscribe('products', (_message, data) => { //Aqui no se sabe que data esta llegando porque esta en otro proyecto
      this._products.push(data as unknown as ICommonProduct)//por eso se convierte a unknown y depues al tipo que se necesita, el equipo debe saber que estructura de datos se maneja
      this.count++;
      localStorage.setItem('products', JSON.stringify(this._products))
    })
  }
}
