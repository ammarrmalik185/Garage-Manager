class vehicle {
  make: string;
  model: string;
  year: number;
  price: number;
  imageUrl: string;

  constructor(make: string, model: string, year: number, price: number, imageUrl: string) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
