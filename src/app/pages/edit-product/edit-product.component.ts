import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  public selectedFile: File | null = null;
 product:any;
 userId:any;

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = localStorage.getItem('userId');
      const id= params['id']; 
      this.getProductId(id); 
    });

  }
  
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
      this.editProduct(formData);
    }
  }
  

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  editProduct(formData: FormData) {
    console.log(this.product._id);
    const apiUrl = `http://localhost:3000/api/products/${this.product._id}`;

     

    this.http.put(apiUrl, formData).subscribe(
      (response:any) => {
        console.log('Producto editado:', response, formData);
      this.getProductId(response.data._id);
      this.router.navigate([`/store/${this.userId}`]);
      },
      (error) => {
        console.error('Error durante la edición del producto:', error);
      }
    );
  }
  getProductId(id:string){
    this.http.get(`http://localhost:3000/api/products/${id}`).subscribe(response=>{
      this.product=response;
      this.product= this.http.get(`http://localhost:3000/api/products/${id}`).subscribe(response=>{
       this.product=response;
        this.product=this.product.data;
      });
    });
  }
}
