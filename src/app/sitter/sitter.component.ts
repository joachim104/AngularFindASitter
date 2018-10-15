import { Component, OnInit, Input } from '@angular/core';
import { Sitter } from '../entities/sitter';
import { EventEmitter } from '@angular/core';
import { Baby } from '../entities/baby';
import { Output } from '@angular/core';

@Component({
  // Her definerer vi hvad dette komponent skal hedde i html-filen
  selector: 'app-sitter',
  // her linker vi html-filen til komponenten
  templateUrl: './sitter.component.html',
  // her linker vi css-filen til komponenten
  styleUrls: ['./sitter.component.scss']
})
export class SitterComponent implements OnInit {

  @Input() sitter: Sitter;
  @Output() sitterEditClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  ngOnInit() {}

  onEditClick(sitter: Sitter) {
    // Handle logic here, or pass event to parent component
    this.sitterEditClicked.emit(this.sitter);
  }
}
