import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  products$: Observable<any> | undefined;
  constructor(private productSrv: ProductService) {}
  ngOnInit(): void {
    this.getAllCategory();
  }
  getAllCategory() {
    this.products$ = this.productSrv.getAllCategory().pipe(
      map((item: any) => {
        return item;
      })
    );
  }
}
