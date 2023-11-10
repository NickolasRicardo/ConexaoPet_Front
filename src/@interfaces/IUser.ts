import { IPet } from "./IPet";

export interface IUser {
  id?: number;
  createdAt?: Date;
  useName?: string;
  useEmail?: string;
  useTelephone?: string;
  useCpfcnpj?: string;
  useStatus?: number;
  useSubscriber?: number;
  tusId?: number;
  usePassword?: string;
  useProfileDescription?: string;
  useProfilePicture?: string;
  petPets?: IPet[];
}
