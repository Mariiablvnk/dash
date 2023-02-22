import { Component, HostListener, ViewChild } from '@angular/core';
import { OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientService } from '../client.service';
import { Customers } from 'src/app/models/customer';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css', './customers.media-screen.css']
})
export class CustomersComponent implements OnInit {
  public list!: any;
  petlistSubscription!: Subscription;
  public totalSize = 0;
  public pageCount = Math.ceil(this.totalSize / 8)
  public p = 1;
  constructor(private clientServise: ClientService) { }
  isActive = false;
  public prev = '';
  public next = '';

  getAll() {
    this.petlistSubscription = this.clientServise.getAll().subscribe((data) => {
      this.list = data;
      console.log(this.list)
      this.totalSize = this.list.length;
    })
  }
  sortActive() {
    this.isActive = !this.isActive;
    if (this.isActive === true) {
      this.petlistSubscription = this.clientServise.getByStatus('Active').subscribe((data) => {
        this.list = data;
        console.log(this.list)
        this.totalSize = this.list.length;
      })
    } else {
      this.getAll()
    }

  }
  returnSorted(event: Event) {
    let value = (event.target as HTMLInputElement)?.value;
    this.petlistSubscription = this.clientServise.getBySearch(value).subscribe((data) => {
      this.list = data;
      console.log(this.list)
      this.totalSize = this.list.length;
    })
  }
  ngOnInit() {
    this.getAll()
  };
  ngOnDestroy() {
    if (this.petlistSubscription) this.petlistSubscription.unsubscribe()
  }
}

