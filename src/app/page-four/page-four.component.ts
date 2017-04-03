import { Component, HostListener } from '@angular/core';

import { ResponsiveBase } from '../responsive-base';

@Component({
  selector: 'page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.scss']
})
export class PageFour extends ResponsiveBase {
  @HostListener('window:resize', ['$event'])
    onWindowResize(evt: any) {
      this.onResize(evt);
    }

  constructor() {
    super();
  }

  lorems = [
    'Ea est neque ut illum, maxime accusantium voluptas voluptate delectus repellat optio! Dolorum quas qui accusamus consequatur nesciunt hic tenetur autem, esse ipsa quaerat illo, fugiat nulla accusantium ut vel.',
    'Aut perspiciatis harum cum veritatis quia laboriosam illo odio mollitia ipsam earum ullam, fuga officia tempora quo temporibus eveniet blanditiis dolorum itaque iure molestias esse placeat aspernatur neque. Ex, id!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ipsa expedita minus fuga nobis doloremque doloribus consequuntur debitis totam perferendis quas quia, quibusdam, non qui corporis, quo harum repudiandae officiis?',
    'Cupiditate vel, quo ipsum dignissimos. Error, placeat distinctio nihil laboriosam sequi commodi? Architecto asperiores tenetur blanditiis unde deleniti accusamus recusandae mollitia, molestias temporibus fugit. Possimus maiores natus ab quibusdam modi.',
    'Qui pariatur reprehenderit aperiam ab minus earum repellendus nemo suscipit consectetur quas amet sed quo assumenda fuga, iste quos, itaque, ipsa eum! Perspiciatis modi, commodi. Veritatis perspiciatis, consequuntur modi a!'
  ];

  data = [
    {
      id: 1,
      name: 'item 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ipsa expedita minus fuga nobis doloremque doloribus consequuntur debitis totam perferendis quas quia, quibusdam, non qui corporis, quo harum repudiandae officiis?',
    },
    {
      id: 2,
      name: 'item 2',
      description: 'Aut perspiciatis harum cum veritatis quia laboriosam illo odio mollitia ipsam earum ullam, fuga officia tempora quo temporibus eveniet blanditiis dolorum itaque iure molestias esse placeat aspernatur neque. Ex, id!',
    },
    {
      id: 3,
      name: 'item 3',
      description: 'Ea est neque ut illum, maxime accusantium voluptas voluptate delectus repellat optio! Dolorum quas qui accusamus consequatur nesciunt hic tenetur autem, esse ipsa quaerat illo, fugiat nulla accusantium ut vel.',
    }
  ];
}
