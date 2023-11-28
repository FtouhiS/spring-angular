import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChambreService } from 'src/app/services/chambre.service';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent {
  unversiteForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private universiteServ:UniversiteService) {

    this.unversiteForm = this.fb.group({
      nomUniversite: ["", [Validators.required, Validators.minLength(3)]],

      adresse: ["", [Validators.required]],
      image: [""],


    });
  } addUniversite() {
    if (this.unversiteForm.valid) {
      // Assign the form values to the user object
      this.universiteServ.addUniversite(this.unversiteForm.getRawValue()).subscribe(() =>
        this.router.navigate(['universite/universites'])
      );
    } else {
      // Handle invalid form data
    }
  }
  get nomUniversite() {
    return this.unversiteForm.get('nomUniversite')!;
  }
  

  get adresse() {
    return this.unversiteForm.get('adresse');
  }
  get image() {
    return this.unversiteForm.get('image');
  }
  
}


