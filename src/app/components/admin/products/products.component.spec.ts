import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsComponent } from './products.component';
import { ProductsService } from '../../../services/products/products.service';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('ProdutosComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [ProductsService, LocalStorageService],
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete a product', () => {
    spyOn(productService, 'deleteProduct').and.returnValue(of({}));
    spyOn(window, 'confirm').and.returnValue(true);

    component.deleteProduct({ id: 1, name: 'Product 1' });

    expect(productService.deleteProduct).toHaveBeenCalledWith(1);
  });

  it('should add a product', () => {
    spyOn(productService, 'addProduct').and.returnValue(of({}));

    component.addProduct();

    expect(productService.addProduct).toHaveBeenCalledWith(component.newProduct);
    expect(component.newProduct).toEqual({ name: '', price: '', type: '', image: '' });
  });

  it('should edit a product', () => {
    const product = { id: 1, name: 'Product 1', price: 10, type: 'Type 1', image: 'image.jpg' };

    component.editProduct(product);

    expect(component.editMode).toBe(true);
    expect(component.newProduct).toEqual(product);
  });

  it('should save edited product', () => {
    spyOn(productService, 'updateProduct').and.returnValue(of({}));

    component.saveEdit();

    expect(productService.updateProduct).toHaveBeenCalledWith(component.newProduct);
    expect(component.newProduct).toEqual({ name: '', price: '', type: '', image: '' });
    expect(component.editMode).toBe(false);
  });
});
