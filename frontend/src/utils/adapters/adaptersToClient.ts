import { CityLocation } from '../../const';
import CommentDto from '../../dto/comment/comment.dto';
import OfferDto from '../../dto/offer/offer.dto';
import UserDto from '../../dto/user/user.dto';
import { Comment, Offer, User } from '../../types/types';

export const adaptUserToClient =
  (user: UserDto): User => ({
    name: user.name,
    email: user.email,
    avatarUrl: user.avatarPath,
    isPro: user.type === 'pro'
  });

export const adaptOffersToClient =
  (offers: OfferDto[]): Offer[] =>
    offers
      .map((offer: OfferDto) => (adaptOfferToClient(offer)));

export const adaptOfferToClient =
  (offer: OfferDto): Offer => ({
    id: offer.id,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    isPremium: offer.isPremium,
    isFavorite: offer.isFavorite,
    city: {
      name: offer.city,
      location: CityLocation[offer.city]
    },
    location: offer.coordinates,
    previewImage: offer.previewImage,
    type: offer.housingType,
    bedrooms: offer.rooms,
    description: offer.description,
    goods: offer.amenities,
    host: adaptUserToClient(offer.author),
    images: offer.images,
    maxAdults: offer.guests,
  });

export const adaptCommentsToClient =
  (comments: CommentDto[]): Comment[] =>
    comments
      .map((comment: CommentDto) => (adaptCommentToClient(comment)));

export const adaptCommentToClient =
  (comment: CommentDto): Comment => ({
    id: comment.id,
    comment: comment.text,
    date: comment.postDate,
    rating: comment.rating,
    user: adaptUserToClient(comment.user)
  });
