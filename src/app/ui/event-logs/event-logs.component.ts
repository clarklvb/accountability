import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventLogService } from '../event-log.service';

@Component({
  selector: 'event-logs',
  templateUrl: './event-logs.component.html',
  styleUrls: ['./event-logs.component.scss']
})
export class EventLogsComponent implements OnInit {

  logs: Observable<any[]>

  constructor(private eventLogService: EventLogService) { }

  ngOnInit() {
    this.logs = this.eventLogService.getEventLogs();
  }

}
