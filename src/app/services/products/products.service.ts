import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly URL: string = "http://localhost:8080";
  private HEADERS = new HttpHeaders();

  constructor(
    private readonly http: HttpClient,
    private readonly localStorageService: LocalStorageService
  ) {}

  private updateHeadersWithToken() {
    const accessToken = this.localStorageService.getItem('accessToken');
    this.HEADERS = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
  }

  getItems(): Observable<any> {
    this.updateHeadersWithToken();
    return this.http.get(`${this.URL}/products`, { headers: this.HEADERS });
  }

  getProducts(): Observable<any> {
    this.updateHeadersWithToken();
    return this.http.get(`${this.URL}/products`, { headers: this.HEADERS });
  }

  deleteProduct(productId: number) {
    this.updateHeadersWithToken();
    return this.http.delete(`${this.URL}/products/${productId}`, { headers: this.HEADERS });
  }

  addProduct(newPdoduct: any) {
    this.updateHeadersWithToken();
    return this.http.post(`${this.URL}/products`, newPdoduct, { headers: this.HEADERS });
  }

  updateProduct(productData: any) {
    this.updateHeadersWithToken();
    return this.http.patch(`${this.URL}/products/${productData.id}`, productData,{ headers: this.HEADERS });
  }
}
