import { Component, OnInit } from '@angular/core';
import { Product } from '@eyassu-ng/data-access-json/lib/Product';
import { ProductService } from '@eyassu-ng/data-access-json';

@Component({
  selector: 'eyassu-ng-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridExComponent implements OnInit {
  products!: Product[];

  constructor(
    private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsSmall().then(data => this.products = data);
  }
}
