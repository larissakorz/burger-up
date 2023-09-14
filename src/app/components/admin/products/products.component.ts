import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  items: any[] = [];
  newProduct: any = { name: '', price: '', type: '', image: '' };
  editMode = false;
  products: any;

  constructor(private productService: ProductsService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    const accessToken = this.localStorageService.getItem('accessToken');
    if (accessToken) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
      this.productService.getProducts().subscribe((data: any) => {
        this.items = data;
      });
    }
  }

  deleteProduct(product: any) {
    const confirmarExclusao = confirm(`Tem certeza de que deseja excluir o produto ${product.name}?`);
    if (confirmarExclusao) {
      this.productService.deleteProduct(product.id).subscribe(
        () => {

          this.loadUsers();
        },
        error => {
          console.error('Erro ao excluir produto:', error);
        }
      );
    }
  }

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe(() => {
      this.loadUsers();
      this.newProduct = { name: '', price: '', type: '', image: '' };
    });
  }

  editProduct(product: any) {
    console.log('Editing product:', product);
    this.newProduct = { ...product };
    this.editMode = true;
  }

  saveEdit() {
    console.log('Saving edited product:', this.newProduct);
    this.productService.updateProduct(this.newProduct).subscribe(() => {
      this.loadUsers();
      this.newProduct = { name: '', price: '', type: '', image: '' };
      this.editMode = false;
    });
  }
}
