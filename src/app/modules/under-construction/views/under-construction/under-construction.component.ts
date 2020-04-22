import { HttpWrapperService } from './../../../../shared/services/http-wrapper/http-wrapper.service';
import { LayoutStateService } from './../../../../shared/services/layout-state/layout-state.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {

  constructor(
    private layoutStateSvc: LayoutStateService,
    private httpWrapper: HttpWrapperService
  ) { }

  ngOnInit(): void {
    this.layoutStateSvc.updateLayoutState({
      displayHeader: false,
      displayLeftNav: false,
      displayFooter: false
    });
  }

}
