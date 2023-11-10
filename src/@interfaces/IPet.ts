export interface IPet {
  id?: number;
  createdAt?: Date;
  petName: string;
  petPicture: string;
  petBreed: string;
  petGender: number;
  petVaccines: string;
  petComments: string;
  petIsActive: number;
  useId: number;
  pknId: number;
}
