export class Robot {
  private visited: boolean;
  private value: Value;
  constructor(value: Value) {
    this.visited = false;
    this.value = value;
  }

  getValue(): Value {
    return this.value;
  }

  getVisited(): boolean {
    return this.visited;
  }

  setVisited(): void {
    this.visited = !this.visited;
  }
}

interface Value {
  x: number;
  y: number;
}
