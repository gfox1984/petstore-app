import { Configuration, PetApi, StoreApi, UserApi } from "./petstore";

const configuration = new Configuration();

export const petApi = new PetApi(configuration);
export const storeApi = new StoreApi(configuration);
export const userApi = new UserApi(configuration);