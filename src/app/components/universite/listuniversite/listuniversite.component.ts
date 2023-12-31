import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/models/chambre';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-listuniversite',
  templateUrl: './listuniversite.component.html',
  styleUrls: ['./listuniversite.component.css']
})
export class ListuniversiteComponent {
 universites: Universite[] = [];

  constructor(private universiteService: UniversiteService, private route:Router) { }

  ngOnInit() {
    this.universiteService.retreiveAllUniversites().subscribe({
      next: (data) => this.universites = data as Universite[],
      error: (err) => console.log(err),
    })
    console.log(
      "error "
    );
  }
  deleteUniversite(id: number) {
    if (id !== undefined) {
      this.universiteService.removeUniversite(id).subscribe({
        next: () => {
          this.universites = this.universites.filter((c) => c.id !== id);
        },
        error: (err) => console.log(err),
      });
    } else {
      console.error('Invalid universite id:', id);
    }
  }

  updateUniversite(idUniversite: number) {
    this.route.navigate(['universite/updateUniversite',idUniversite]);
       
      }
  
}
