import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'eyassu-ng-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridExComponent implements OnInit {
  formGroup!: FormGroup;
  products!: Product[];

  constructor(
    private readonly fb: FormBuilder,
    private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      grid: ''
    });

    this.productService.getProductsSmall().then(data => this.products = data);
  }
}
