import { MyNetworkService } from './services/my-network.service';
import {BehaviorSubject} from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-network',
  templateUrl: './my-network.component.html',
  styleUrls: ['./my-network.component.scss']
})
export class MyNetworkComponent implements OnInit {

  is_show_less: boolean = true
  displayed_links: any[] = []
  all_links: any[] = [
    {
      icon_path: "/assets/images/mynetwork/connections.svg",
      title: "Connections",
      num: 668,
    },
    {
      icon_path: "/assets/images/mynetwork/contacts.svg",
      title: "contacts",
      num: 668,
    },
    {
      icon_path: "/assets/images/mynetwork/groups.svg",
      title: "Groups",
      num: 5,
    },
    {
      icon_path: "/assets/images/mynetwork/events.svg",
      title: "Events",
      num: "2",
    },
    {
      icon_path: "/assets/images/mynetwork/pages.svg",
      title: "Pages",
      num: 13,
    },
  ]
  invitations$ = new BehaviorSubject<any>([]);




  constructor(private networkService: MyNetworkService) { }

  ngOnInit(): void {
    this.networkService.getInvitations().subscribe((inv)=> this.invitations$.next(inv))
    this.displayed_links = this.all_links
  }

  onShow() {
    this.displayed_links = this.is_show_less ? [this.all_links[0]] : this.all_links
    this.is_show_less = !this.is_show_less
  }

  onAccept(invitation: any) {
    invitation.invitation_state = 'accepted'
  }

  onIgnore(invitation: any) {
    invitation.invitation_state = 'ignored'
  }

  onRemove(invitation_index: number) {
    const invitations = [...this.invitations$.getValue()];
    invitations.splice(invitation_index, 1);
    this.invitations$.next(invitations);
  }




}
