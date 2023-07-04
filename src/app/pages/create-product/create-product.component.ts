import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  public selectedFile: File | null = null;
  userId:any;
  constructor(private http: HttpClient,private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = new FormData();
      formData.append('name', form.value.name);
      formData.append('price', form.value.price);
      formData.append('descr', form.value.descr);
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }
      formData.append('category', form.value.category);
      formData.append('state', form.value.state);

    
     this.userId = localStorage.getItem('userId');
     if (this.userId) {
        const userIdString = this.userId.toString();
        formData.append('userId', userIdString);
      }
      this.createProduct(formData);
    }
  }
  

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  createProduct(formData: FormData) {
    const apiUrl = 'http://localhost:3000/api/products';
   
    console.log(formData);

    this.http.post(apiUrl, formData).subscribe(
      (response) => {
        console.log('Producto creado:', response);
        this.router.navigate([`/store/${this.userId}`]);
      },
      (error) => {
        console.error('Error durante la creación del producto:', error);
      }
    );
  }
}
