import {ProjectsModel} from '../projects/projects.model';

export type HomeModel = {
  homeBanner: HomeBannerModel,
  aboutUs: AboutUsModel,
  services: ServicesModel,
  projects: ProjectsModel,
  contactUs: ContactUsModel,
  contacts: ContactsModel,
}

export type HomeBannerModel = {
  image: string,
  title: string,
  subtitle: string,
  description: string,
  budgetButtonText: string
}

export type AboutUsModel = {
  image: string,
  title: string,
  description: string,
  badgeTitle: string,
  badgeSubtitle: string,
  characteristics: AboutUsCharacteristicModel[],
}

export type AboutUsCharacteristicModel = {
  id: string,
  text: string,
}

export type ServicesModel = {
  title: string,
  subtitle: string,
  cards: ServicesCardModel[],
}

export type ServicesCardModel = {
  id: string,
  icon: string,
  title: string,
  description: string,
}

export type ContactUsModel = {
  title: string,
  subtitle: string,
  contactUsButtonText: string
}

export type ContactsModel = {
  telephone: string,
  email: string,
  location: string,
  subtitle: string,
}
