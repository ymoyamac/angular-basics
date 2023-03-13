import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * The @Component decoretor marks a class as an Angular component and
 * provides configuration metadata that determines how the component should be processed,
 * instantiated, and used at runtime.
 *
 * A @Component always associated with a @HTML template and belongs of @NgModule
 * which allows to include the @Component in another Application or @Component
 *
 */
@Component({
  /**
   * Is the name of the component in the @HTML template
   */
  selector: 'app-block',
  /**
   * @HTML Template: A template is a block of @HTML that tells Angular how to render the component in your application.
   * The relative path or absolute URL of a template file for an Angular component.
   * If provided, do not supply an inline template using template.
   */
  templateUrl: './block.component.html',
  styleUrls: [ '../app.component.scss' ],
  /**
   * This option allow control how the encapsulation is applied. @ViewEncapsulation.ShadowDom
   * allows you to apply specific styles only to the root component and its children.
   * The styles of components are only added to the shadow DOM host,
   * ensuring that they only affect elements within their respective components' views.
   */
  encapsulation: ViewEncapsulation.ShadowDom,
})
/**
* TypeScript File: Defines behavior of the @Component
*/
export class BlockComponent implements OnInit {

  counter: number = 0;
  propertyCustom: string = "this is a property";

  constructor() {}
  /**
   * Initialize the @Directive or @Component after Angular first displays the data-bound properties and
   * sets the directive or component's input properties.
   */
  ngOnInit(): void {
    console.log('This happened first when the component redered');
  }

  increment(value: number): void {
    this.counter = this.counter + value;
  }

  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

}
