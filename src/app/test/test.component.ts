import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Utilisateur } from '../Models/utilisateur.model';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  utilisateurForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.utilisateurForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: this.fb.group({
        rue: [''],
        codePostal: [''],
        ville: ['']
      }),
      skills: this.fb.array([
        this.fb.control('', Validators.required)  // At least one skill is required
      ])
    });
  }

  get skills(): FormArray {
    return this.utilisateurForm.get('skills') as FormArray;
  }

  addSkill(): void {
    this.skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(index: number): void {
    if (this.skills.length > 1) {
      this.skills.removeAt(index);
    }
  }

  onSave(): void {
    if (this.utilisateurForm.valid) {
      const utilisateur = this.utilisateurForm.value as Utilisateur;
      console.log("Saved User Data:", Utilisateur);
      // Add save logic here if needed
    }
  }

  onReset(): void {
    this.utilisateurForm.reset();
    // Ensure at least one skill input is present after reset
    this.skills.clear();
    this.addSkill();
  }
}
