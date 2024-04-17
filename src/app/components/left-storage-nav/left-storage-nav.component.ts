import { Component } from '@angular/core';
import { devices } from '../devices/devices.component';

@Component({
  selector: 'app-left-storage-nav',
  standalone: true,
  imports: [devices],
  templateUrl: './left-storage-nav.component.html',
  styleUrl: './left-storage-nav.component.scss'
})
export class LeftStorageNavComponent {

}

export const leftStoragenav = LeftStorageNavComponent;