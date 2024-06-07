import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationstateserviceService {

  constructor() { }

  private state: any;

  setState(state: any) {
    this.state = state;
  }

  getState(): any {
    const currentState = this.state;
    this.state = null;
    return currentState;
  }
}
