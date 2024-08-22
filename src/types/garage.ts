class garage {
  name: string;
  location: string;
  description: string;
  imageUrl: string;

  vehicles: vehicle[] = [];

  constructor(name: string, location: string, description: string, imageUrl: string) {
    this.name = name;
    this.location = location;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}
