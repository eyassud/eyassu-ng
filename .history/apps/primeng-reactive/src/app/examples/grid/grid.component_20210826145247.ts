import { Component, OnInit } from '@angular/core';
import { Product } from 'Product';
import { ProductService } from 'libs/data-access-json/src/lib/product.service';

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
