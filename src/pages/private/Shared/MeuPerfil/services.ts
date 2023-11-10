import api from "@http/api";
import { IPagedModel } from "@src/@interfaces/IPagedModel";
import { IProviders } from "@src/@interfaces/IProviders";

export interface IInterfaceResponseTable {
  error: boolean;
  response?: IPagedModel;
}

export interface IInterfaceResponse {
  error: boolean;
  response?: IProviders;
}

export interface IInterfaceResponseFind {
  error: boolean;
  response?: IPagedModel[];
}

export interface IProvidersTable {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  useName?: string;
  useProfilePicture?: string;
  useProfileDescription?: string;
  pbkPrice?: string;
  useDistrict?: string;
  useDistance?: string;
}

class Services {
  public async FindByID({ id }: any): Promise<IInterfaceResponse> {
    return await api
      .get(`Providers?id=${id}`)
      .then((response) => {
        return {
          error: false,
          response: response.data,
        };
      })
      .catch((error) => {
        return { error: true };
      });
  }
}

export default Services;
