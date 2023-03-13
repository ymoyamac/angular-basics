import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-block-child',
  templateUrl: './block-child.component.html',
})
export class ChildBlockComponent implements OnChanges {

  private _currentValue: number = 0;

  /**
   * The @Input() decorator in a child component or directive signifies
   * that the property can receive its value from its parent component.
   */
  @Input() major = 0;
  @Input() minor = 0;
  @Input()
  get childValue(): number {
    return this._currentValue;
  }
  set childValue(value: number) {
    this._currentValue = value;
  }
  /**
   * The child component exposes an EventEmitter property with which it emits events
   * when something happens. The parent binds to that event property and reacts to those events.
   */
  @Output() voted = new EventEmitter<string>();
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

}
