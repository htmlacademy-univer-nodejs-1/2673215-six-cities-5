import { OFFER_IMAGES_COUNT } from '../../const';
import CreateCommentDto from '../../dto/comment/create-comment.dto';
import CreateOfferDto from '../../dto/offer/create-offer.dto';
import UpdateOfferDto from '../../dto/offer/update-offer.dto';
import CreateUserDto from '../../dto/user/create-user.dto';
import LoginUserDto from '../../dto/user/ogin-user.dto';
import { CommentAuth, NewOffer, Offer, UserAuth, UserRegister } from '../../types/types';

export const adaptSignupToServer =
  (user: UserRegister): CreateUserDto => ({
    email: user.email,
    name: user.name,
    password: user.password,
    type: user.isPro ? 'pro' : 'обычный',
  });

export const adaptSigninToServer =
  (user: UserAuth): LoginUserDto => ({
    email: user.email,
    password: user.password
  });


export const adaptNewOfferToServer =
  (newOffer: NewOffer): CreateOfferDto => ({
    title: newOffer.title,
    description: newOffer.description,
    city: newOffer.city.name,
    previewImage: newOffer.previewImage,
    images: generateDefaultOfferImages(newOffer.previewImage),
    isPremium: newOffer.isPremium,
    housingType: newOffer.type,
    rooms: newOffer.bedrooms,
    guests: newOffer.maxAdults,
    price: newOffer.price,
    amenities: newOffer.goods,
    coordinates: newOffer.location,
    rating: 0,
    postDate: new Date(),
    commentCount: 0
  });

export const adaptOfferToServer =
  (offer: Offer): UpdateOfferDto => ({
    title: offer.title,
    description: offer.description,
    city: offer.city.name,
    previewImage: offer.previewImage,
    images: generateDefaultOfferImages(offer.previewImage),
    isPremium: offer.isPremium,
    housingType: offer.type,
    rooms: offer.bedrooms,
    guests: offer.maxAdults,
    price: offer.price,
    amenities: offer.goods,
    coordinates: offer.location,
  });

export const adaptCommentAuthToServer =
  (commentAuth: CommentAuth): CreateCommentDto => ({
    text: commentAuth.comment,
    rating: commentAuth.rating,
    postDate: new Date()
  });

const generateDefaultOfferImages = (previewImage: string): string[] => Array.from(
  { length: OFFER_IMAGES_COUNT },
  (_, i) => `${previewImage}-${i + 1}.jpg`
);
