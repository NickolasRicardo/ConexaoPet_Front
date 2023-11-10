import api from "@http/api";
import { IPagedModel } from "@src/@interfaces/IPagedModel";
import { IProviders } from "@src/@interfaces/IProviders";

export interface IInterfaceResponseTable {
  error: boolean;
  response?: IPagedModel;
}

export interface IInterfaceResponseList {
  error: boolean;
  response?: IProvidersTable[] | IProviders[];
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
  public async ListPaged(): Promise<IInterfaceResponseList> {
    return await api
      .get(`Providers/ListPrestadores`)
      .then((response) => {
        let prestadores = response.data;

        let itemPrestadores: IProvidersTable[] = [];

        prestadores.map((item: IProviders) => {
          return itemPrestadores.push({
            id: item.id,
            useName: item.useName,
            useProfilePicture: item.useProfilePicture,
            useProfileDescription: item.useProfileDescription,
            pbkPrice: item.pbkPrice,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            useDistance: item.useDistance,
            useDistrict: item.useDistrict,
          });
        });

        return {
          error: false,
          response: itemPrestadores,
        };
      })
      .catch((error) => {
        return { error: true };
      });
  }
}

export default Services;
