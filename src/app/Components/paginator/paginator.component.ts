import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {

  @Input() currentPage!: number;
  @Input() totalPage!: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPage }, (_, i) => i + 1);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPage) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  gotoPage(page: number): void {
    this.pageChange.emit(page);
  }
}
