const currentYear = new Date().getFullYear();
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge(): string {
    const yearDiff = currentYear - this.year;
    return `${yearDiff} (assuming current year is ${currentYear})`;
  }
}
