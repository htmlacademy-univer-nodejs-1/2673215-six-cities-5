import { Type, Location } from '../../types/types';
import UserDto from '../user/user.dto';

export default class OfferDto {
  public id!: string;

  public title!: string;

  public description!: string;

  public postDate!: Date;

  public city!: string;

  public previewImage!: string;

  public images!: string[];

  public isPremium!: boolean;

  public isFavorite!: boolean;

  public housingType!: Type;

  public rooms!: number;

  public guests!: number;

  public price!: number;

  public amenities!: string[];

  public author!: UserDto;

  public coordinates!: Location;

  public commentCount!: number;

  public rating!: number;
}

