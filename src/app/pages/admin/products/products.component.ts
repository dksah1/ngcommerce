import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible: boolean = false;

  productObj: any = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    createdDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: 0,
    productImageUrl: '',
  };

  categoryList: any[] = [];
  productsList: any[] = [];
  constructor(private productsrv: ProductService) {}

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsrv.getAllProducts().subscribe((res: any) => {
      this.productsList = res;
      console.log('product list', this.productsList);
    });
  }
  getAllCategory() {
    return this.productsrv.getAllCategory().subscribe((res: any) => {
      this.categoryList = res;
      console.log('all category', this.categoryList);
    });
  }
  onUpdate() {
    this.productsrv.updateProduct(this.productObj).subscribe((res: any) => {
      if (res) {
        alert('Product cupdated');
        this.getAllProducts();
      } else {
        alert(res.message);
      }
    });
  }
  onSave() {
    this.productsrv.saveProduct(this.productObj).subscribe((res: any) => {
      if (res) {
        alert('Product created');
        this.getAllProducts();
      } else {
        alert(res.message);
      }
    });
  }
  onDelete(item: any) {
    const isDelete = confirm('are you sure want to delete');
    debugger;
    if (isDelete) {
      this.productsrv.deleteProduct(item.productId).subscribe((res: any) => {
        if (res) {
          alert('Product deleted');
          this.getAllProducts();
        } else {
          alert(res.message);
        }
      });
    }
  }
  onEdit(item: any) {
    this.productObj = item;
    this.openSidePanel();
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }
  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
