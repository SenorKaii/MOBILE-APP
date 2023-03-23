import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.page.html',
  styleUrls: ['./lecturers.page.scss'],
})
export class LecturersPage implements OnInit {

  public data = [
    { name: "Siti Faizah Binti Miserom", avatarUrl: "https://www.kuptm.edu.my/images/2020/fcom/staff/FaizahM.png" },
    { name: "Shuhadah Binti Othman", avatarUrl: "https://www.kuptm.edu.my/images/2020/fcom/staff/Shuhadah.png" },
    { name: "Nor Azura Binti Salleh @ Omar", avatarUrl: "https://www.kuptm.edu.my/images/2020/fcom/staff/AzuraSalleh.png" }
  ];

  public filteredResults = [...this.data];

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredResults = this.data.filter(d => d.name.toLowerCase().indexOf(query) > -1);
  }

  constructor(private router: Router){
    this.filteredResults=this.data;
  }

  goToPage(result: any){
    this.router.navigate(['/'+result.name]);
  }

  ngOnInit() {
  }

}
