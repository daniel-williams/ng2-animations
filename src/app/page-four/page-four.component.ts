import { Component, HostListener, Input } from '@angular/core';

let BASE_WIDTH = 1200;

@Component({
  selector: 'page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.scss']
})
export class PageFour {
  private factor: number = 1;
  @HostListener('window:resize', ['$event'])
    onWindowResize(evt:any) {
      this.setFactor();
    }

  constructor() {
    this.setFactor();
  }

  setFactor(): void {
    this.factor = window.innerWidth / BASE_WIDTH;
  }

  lorems = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ipsa expedita minus fuga nobis doloremque doloribus consequuntur debitis totam perferendis quas quia, quibusdam, non qui corporis, quo harum repudiandae officiis?',
    'Ea est neque ut illum, maxime accusantium voluptas voluptate delectus repellat optio! Dolorum quas qui accusamus consequatur nesciunt hic tenetur autem, esse ipsa quaerat illo, fugiat nulla accusantium ut vel.',
    'Aut perspiciatis harum cum veritatis quia laboriosam illo odio mollitia ipsam earum ullam, fuga officia tempora quo temporibus eveniet blanditiis dolorum itaque iure molestias esse placeat aspernatur neque. Ex, id!',
    'Cupiditate vel, quo ipsum dignissimos. Error, placeat distinctio nihil laboriosam sequi commodi? Architecto asperiores tenetur blanditiis unde deleniti accusamus recusandae mollitia, molestias temporibus fugit. Possimus maiores natus ab quibusdam modi.',
    'Qui pariatur reprehenderit aperiam ab minus earum repellendus nemo suscipit consectetur quas amet sed quo assumenda fuga, iste quos, itaque, ipsa eum! Perspiciatis modi, commodi. Veritatis perspiciatis, consequuntur modi a!'
  ];
}

