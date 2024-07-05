import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  color: string = 'primary';
  buttonColor: string = 'primary';

  onClickColor() {
    this.color === '' ? (this.color = 'primary') : (this.color = '');
    this.buttonColor === 'secondary'
      ? (this.buttonColor = 'primary')
      : (this.buttonColor = 'secondary');
  }
}
