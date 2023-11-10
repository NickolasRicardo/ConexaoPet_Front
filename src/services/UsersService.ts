import { IUser } from "../@interfaces/IUser";
import { IPagedModel } from "../@interfaces/IPagedModel";
import api from "../http/api";
import { IRequestByIDModel } from "../@interfaces/IRequestByIDModel";

export interface IInterfaceResponseTable {
  error: boolean;
  response?: IPagedModel;
}

export interface IInterfaceResponseList {
  error: boolean;
  response?: IUser[];
}

export interface IInterfaceResponseFind {
  error: boolean;
  response?: IPagedModel[];
}

export interface IInterfaceResponseFindById {
  error: boolean;
  response?: IUser;
}

class Services {
  public async List(): Promise<IInterfaceResponseList> {
    return await api
      .get(`User`)
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

  public async ListPaged(): Promise<IInterfaceResponseTable> {
    return await api
      .get(`User/Paginated`)
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

  public async Find({
    id,
  }: IRequestByIDModel): Promise<IInterfaceResponseFindById> {
    return await api
      .get(`User/${id}`)
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

  public async Create(data: IUser) {
    return await api
      .post(`User`, data)
      .then((response) => {
        return {
          error: false,
        };
      })
      .catch((error) => {
        return { error: true };
      });
  }

  public async Update(data: IUser) {
    return await api
      .put(`User/${data.id}`, data)
      .then((response) => {
        return {
          error: false,
        };
      })
      .catch((error) => {
        return { error: true };
      });
  }

  public async Delete({ id }: IRequestByIDModel) {
    return await api
      .delete(`User/${id}`)
      .then((response) => {
        return {
          error: false,
        };
      })
      .catch((error) => {
        return { error: true };
      });
  }
}

export default Services;
