import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected isMenuOpened: boolean = false;

  protected handleOpen() {
    this.isMenuOpened = true;
  }

  protected handleClose(event: Event) {
    const className = (event.target as HTMLElement).classList[0];
    const foundMenu = document
      .querySelector(`.${className}`)!
      .closest('.header__mobile-menu');

    if (!foundMenu) {
      this.isMenuOpened = false;
    }
  }
}
