export type ProjectsCardModel = {
  id: string,
  title: string,
  subtitle: string,
  description: string,
  location: string,
  year: number,
  totalArea: number,
  duration: number,
  durationUnit: string,
  imageIds: string[],
}

export type ProjectsModel = {
  title: string,
  subtitle: string,
  project: ProjectsCardModel[]
}
