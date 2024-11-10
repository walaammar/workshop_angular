import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../Models/product';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  productForm!: FormGroup;
  products: Product[] = []; // Liste des produits

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z]+$')]],
      image: ['', Validators.required],
      categoryId: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*\\.?[0-9]+$')]],
      promotion: ['', Validators.pattern('^(100|[1-9]?[0-9])$')],
      description: ['', Validators.required],
      brand: ['', Validators.required]
    });
  }

  onSave(): void {
    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value;
      newProduct.id = this.products.length + 1; // ID auto-incrémenté
      this.products.push(newProduct); // Ajouter le produit à la liste
      console.log("Produit ajouté:", newProduct);
      this.productForm.reset(); // Réinitialiser le formulaire après sauvegarde
    }
  }
}
