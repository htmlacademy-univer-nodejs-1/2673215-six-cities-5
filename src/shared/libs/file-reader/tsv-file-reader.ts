import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, isCityName, isHousingType, isAmenity, isUserType } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  constructor(
    private readonly filename: string
  ) {}

  private rawData = '';

  public read(): void {
    try {
      this.rawData = readFileSync(this.filename, 'utf-8');
    } catch (err) {
      throw new Error(`Не удалось прочитать файл ${this.filename}`);
    }
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('Файл не был прочитан');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, createdDate, city, previewImage, images, isPremium, isFavorite, rating, housingType, rooms, guests, price, amenities, authorName, authorEmail, authorAvatarPath, authorPassword, authorType, commentCount, coordinates]) => ({
        title,
        description,
        postDate: new Date(createdDate),
        city: isCityName(city) ?? 'Paris',
        previewImage,
        images: images.split(';'),
        isPremium: isPremium === 'true',
        isFavorite: isFavorite === 'true',
        rating: parseFloat(rating),
        housingType: isHousingType(housingType) ?? 'apartment',
        rooms: parseInt(rooms, 10),
        guests: parseInt(guests, 10),
        price: parseInt(price, 10),
        amenities: amenities.split(';').map((amenity) => isAmenity(amenity) ?? 'Breakfast'),
        author: { name: authorName, email: authorEmail, avatarPath: authorAvatarPath, password: authorPassword, type: isUserType(authorType) ?? 'обычный' },
        commentCount: Number.parseInt(commentCount, 10),
        coordinates: {
          latitude: Number.parseFloat(coordinates.split(';')[0]),
          longitude: Number.parseFloat(coordinates.split(';')[1])
        },
      }));
  }
}
