import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Banner } from '../../../shared/components/banner/banner'; // ✅ import your banner

@Component({
  selector: 'bajaj-ep-home',
  standalone: true,
  imports: [CommonModule, Banner], // ✅ include Banner here
  templateUrl: './ep-home.html',
  styleUrl: './ep-home.css'
})
export class EpHome { }
