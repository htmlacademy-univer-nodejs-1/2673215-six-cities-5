import { Location, Type } from '../../types/types';

export default class CreateOfferDto {
  public title!: string;

  public description!: string;

  public city!: string;

  public previewImage!: string;

  public images!: string[];

  public isPremium!: boolean;

  public housingType!: Type;

  public rooms!: number;

  public guests!: number;

  public price!: number;

  public amenities!: string[];

  public coordinates!: Location;

  public rating!: number;

  public postDate!: Date;

  public commentCount!: number;
}
