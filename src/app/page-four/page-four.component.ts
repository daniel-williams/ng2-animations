import { Component, HostListener, ViewChildren, QueryList } from '@angular/core';

import { ResponsiveBase } from '../responsive-base';
import { ChildTest } from './child-test';

@Component({
  selector: 'page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.scss'],
})
export class PageFour extends ResponsiveBase {
  @HostListener('window:resize', ['$event'])
    onWindowResize(evt: any) {

      this.onResize(evt);

      let cells = document.querySelectorAll('table > thead > tr > td');
      let divs = document.querySelectorAll('.test > div');

      for(let i = 0; i < cells.length; i++) {
        let cell = cells[i] as Element;
        let div = divs[i] as HTMLDivElement;

        div.setAttribute('style',`display:block;width:${cell.clientWidth}px`);
        div.style.width=`${cell.clientWidth}px`;
      }
    }

    @ViewChildren(ChildTest) testChildren: QueryList<ChildTest>;

  constructor() {
    super();
  }

  ngAfterViewInit() {

  }

  test(i: number) {
    if(this.testChildren.length >= i) {
      let children = this.testChildren.toArray();

      children[i].triggerSayMyName();
    }
  }

  private name: string = '';
  sayName(val: string): void {
    this.name = val || '';
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
      name: 'Luke Skywalker',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ipsa expedita minus fuga nobis doloremque doloribus consequuntur debitis totam perferendis quas quia, quibusdam, non qui corporis, quo harum repudiandae officiis?',
    },
    {
      id: 2,
      name: 'Han Solo',
      description: 'Aut perspiciatis harum cum veritatis quia laboriosam illo odio mollitia ipsam earum ullam, fuga officia tempora quo temporibus eveniet blanditiis dolorum itaque iure molestias esse placeat aspernatur neque. Ex, id!',
    },
    {
      id: 3,
      name: 'Leia Organa',
      description: 'Ea est neque ut illum, maxime accusantium voluptas voluptate delectus repellat optio! Dolorum quas qui accusamus consequatur nesciunt hic tenetur autem, esse ipsa quaerat illo, fugiat nulla accusantium ut vel.',
    }
  ];
}
