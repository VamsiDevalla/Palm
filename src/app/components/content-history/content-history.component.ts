import { Component, OnInit } from '@angular/core';
import { ContentHistoryService } from 'src/app/services/content-history.service';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-content-history',
  templateUrl: './content-history.component.html',
  styleUrls: ['./content-history.component.scss']
})
export class ContentHistoryComponent implements OnInit {
  contentHistory: object[];
  constructor(
    private contentHistoryService: ContentHistoryService,
    private dataService: AboutService
    ) { }

  about: any;

  ngOnInit() {
    this.contentHistory = [];
    this.about = {};
    this.dataService.getAboutData().subscribe(data => {
      this.about.applicationName = data.applicationNumberText;
      this.about.filingDate = data.filingDate;
      this.about.continuityForeign = data.continuityForeign || 'N/A';
      this.about.title = data.inventionTitle;
      this.about.status = `${data.status} (${data.applicationStatusDate})`;
      this.about.Examiner = data.examinerName;
      this.about.ID = data.examinerNumber;
      this.about.GAU = data.gau;
      this.about.docketCategory = data.docketCategory || 'N/A';
    });
    this.contentHistoryService.getContentHistory().subscribe(res => {
      res.results.forEach( record => {
        this.contentHistory.push({
          recordedDate: record.audit.lastModifiedTime,
          status: record.applicationStatusNumber || '',
          code: record.caseActionCode,
          description: record.applicationStatusDescriptionText,
          palmEntryDate: record.recordedDate
        });
      });
    });
  }
}
