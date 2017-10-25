/**
 * New typescript file
 */
import {EventEmitter} from '@angular/core';

export class TestElement {
  public properties:  Map<string, string>;

  constructor() {
    this.properties = new Map<string, string>();
  }

  setProperty(name: string, value: string) {
    console.log('setting property: %s to %s', name, value);
    this.properties.set(name, value);
  }

  getProperty(name: string) {
    return this.properties.get(name);
  }

}

export class TestElementNode {
  element: TestElement;
  subTree: TestElement[];
  elementType: string;

  constructor() {
   this.element = new TestElement();
  }

  getName() {
    return this.element.getProperty('TestElement.name');
  }

  setName(name: string) {
    this.element.setProperty('TestElement.name', name);
  }

}

