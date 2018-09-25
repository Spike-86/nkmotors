import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor() { }

   reviews = [
    {
      "author_name" : "Макс Крикс",
      "author_url" : "https://www.google.com/maps/contrib/102635810608795028973/reviews",
      "language" : "ru",
      "profile_photo_url" : "https://lh5.googleusercontent.com/-PcEqqzu0-0U/AAAAAAAAAAI/AAAAAAAAAc4/1rop8NV21Sc/s128-c0x00000000-cc-rp-mo-ba2/photo.jpg",
      "rating" : 5,
      "relative_time_description" : "7 месяцев назад",
      "text" : "Отличное СТО, удобное месторассположение,  все быстро в срок, приемлемые цены, так держать. Только у них буду обслуживать свои авто и рекомендовать друзьям."
    },
    {
      "author_name" : "Кирилл Тропынин",
      "author_url" : "https://www.google.com/maps/contrib/106304725517118160469/reviews",
      "language" : "ru",
      "profile_photo_url" : "https://lh3.googleusercontent.com/-85d2Mlh7-Hc/AAAAAAAAAAI/AAAAAAAABWA/ns6RzFlq94c/s128-c0x00000000-cc-rp-mo-ba2/photo.jpg",
      "rating" : 5,
      "relative_time_description" : "год назад",
      "text" : "Парни делают как себе и никогда не возьмут лишних денег. Все мои знакомые также остались довольны."
    },
    {
      "author_name" : "Алексей Русак",
      "author_url" : "https://www.google.com/maps/contrib/113257616223429978699/reviews",
      "language" : "ru",
      "profile_photo_url" : "https://lh4.googleusercontent.com/-n3lh79FZ8Hg/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaPq9twaFrO2QISKGq4kPyTvxofTTg/s128-c0x00000000-cc-rp-mo-ba2/photo.jpg",
      "rating" : 5,
      "relative_time_description" : "10 месяцев назад",
      "text" : "Быстро качественно"
    },
    {
      "author_name" : "Pavel Orsik",
      "author_url" : "https://www.google.com/maps/contrib/118346726269164984874/reviews",
      "language" : "ru",
      "profile_photo_url" : "https://lh4.googleusercontent.com/-2QvKVRdqATM/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaM3kD1VPuV_YH29FbhSkqP5TgHfxQ/s128-c0x00000000-cc-rp-mo/photo.jpg",
      "rating" : 5,
      "relative_time_description" : "год назад",
      "text" : "Самое крутое сто в мире!!!!!"
    },
    {
      "author_name" : "Anton Skarakhod",
      "author_url" : "https://www.google.com/maps/contrib/101072751689381750578/reviews",
      "language" : "ru",
      "profile_photo_url" : "https://lh4.googleusercontent.com/-QoE8SDw5uiU/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaNlPsTtlRK0FTE9gOtK7S47LSHJMA/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg",
      "rating" : 5,
      "relative_time_description" : "год назад",
      "text" : "Обслуживаю свой сеат только здесь!"
    }
  ]

  getReview() {
    return this.reviews
  }
}
