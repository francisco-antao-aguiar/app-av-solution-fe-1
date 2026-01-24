export type ProjectsCardModel = {
  id: string,
  images: string[],
  title: string,
  subtitle: string,
  description: string,
  location: string,
  year: number,
  totalArea: number,
  duration: number,
  durationUnit: string,
}

export type ProjectsModel = {
  title: string,
  subtitle: string,
  projects: ProjectsCardModel[]
}
