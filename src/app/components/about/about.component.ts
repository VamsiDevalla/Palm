import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: any;
  constructor(private dataService: AboutService) { }

  ngOnInit() {
    this.about = {};
    this.dataService.getAboutData().subscribe(data => {
      this.about.applicationName = data['applicationNumberText'];
      this.about.filingDate = data['filingDate'];
      this.about.continuityForeign = data['continuityForeign'] || 'N/A';
      this.about.title = data['inventionTitle'];
      this.about.status = `${data['status']} (${data['applicationStatusDate']})`;
      this.about.Examiner = data['examinerName'];
      this.about.ID = data['examinerNumber'];
      this.about.GAU = data['gau'];
      this.about.docketCategory = data['docketCategory'] || 'N/A';
      this.about.speList = data['speList'].reduce((acc,ele) => acc + ele + ',' , '')|| 'N/A';
      this.about.inventorNames = data['inventorNames'].reduce((acc,ele) => acc + ele + ',', '') || 'N/A';
      this.about.applicantNames = data['applicantNames'] || 'N/A';
      this.about.lawFrim = data['lawFrim'] || 'N/A';
      this.about.applicationConfirmationNumber = data['applicationConfirmationNumber'] || 'N/A';
      this.about.publicationNumber = data['publicationNumber'] || 'N/A';
      this.about.patentNumber = data['patentNumber'] || 'N/A';
      this.about.attorneyDocketNumber = data['attorneyDocketNumber'] || 'N/A';
      this.about.foreignPriorityClaimed = data['foreignPriorityClaimed'] || 'N/A';
      this.about.firstInventorToFileIndicator = data['firstInventorToFileIndicator'] || 'N/A';
      this.about.businessEntityStatusCategory = data['businessEntityStatusCategory'] || 'N/A';
      // this.about.docketCategory = data['docketCategory'] || 'N/A';
      // this.about.docketCategory = data['docketCategory'] || 'N/A';
      // this.about.docketCategory = data['docketCategory'] || 'N/A';
    });
  }

}
