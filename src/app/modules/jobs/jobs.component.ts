import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent{


  job_links: any[] = [
    {
      icon_path: "/assets/images/mynetwork/connections.svg",
      title: "My jobs",
    },
    {
      icon_path: "/assets/images/mynetwork/contacts.svg",
      title: "Job alerts",
    },
    {
      icon_path: "/assets/images/mynetwork/groups.svg",
      title: "Demonstrate skills",
    },
    {
      icon_path: "/assets/images/mynetwork/events.svg",
      title: "Interview prep",
    },
    {
      icon_path: "/assets/images/mynetwork/pages.svg",
      title: "Resume Builder",
    },
    {
      icon_path: "/assets/images/mynetwork/pages.svg",
      title: "Job seeker",
    },
    {
      icon_path: "/assets/images/mynetwork/pages.svg",
      title: "Application settings",
    },
  ]



}
