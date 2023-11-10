import { IPet } from "../@interfaces/IPet";
import { IPagedModel } from "../@interfaces/IPagedModel";
import api from "../http/api";
import { IRequestByIDModel } from "../@interfaces/IRequestByIDModel";

export interface IInterfaceResponseTable {
  error: boolean;
  response?: IPagedModel;
}

export interface IInterfaceResponseList {
  error: boolean;
  response?: IPet[];
}

export interface IInterfaceResponseFind {
  error: boolean;
  response?: IPagedModel[];
}

export interface IInterfaceResponseFindById {
  error: boolean;
  response?: IPet;
}

class Services {
  public async List(): Promise<IInterfaceResponseList> {
    return await api
      .get(`Pet`)
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
      .get(`Pet/Paginated`)
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
      .get(`Pet/${id}`)
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

  public async Create(data: IPet) {
    return await api
      .post(`Pet`, data)
      .then((response) => {
        return {
          error: false,
        };
      })
      .catch((error) => {
        return { error: true };
      });
  }
  public async Upload(data: any) {
    return await api
      .post(`Pet/Upload`, data)
      .then((response) => {
        return {
          error: false,
        };
      })
      .catch((error) => {
        return { error: true };
      });
  }

  public async Update(data: IPet) {
    return await api
      .put(`Pet/${data.id}`, data)
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
      .delete(`Pet/${id}`)
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
