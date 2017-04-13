import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-test',
  template: `
<div>{{name}}</div>
`,
})
export class ChildTest {
  @Input() name: string;
  @Input() remote: any;

  @Output() sayMyName = new EventEmitter<string> ();

  constructor() {
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    changes['remote'].currentValue.triggerSayMyName = this.triggerSayMyName.bind(this);
    changes['remote'].currentValue.ping = this.pong.bind(this);
  }

  pong() {
    console.log('pong!');
  }

  triggerSayMyName(): void {
    this.sayMyName.emit(this.name.toUpperCase());
  }
}