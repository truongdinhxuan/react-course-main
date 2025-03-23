import { AxiosResponse } from "axios";
import { ICategory } from "../interfaces";
import instance from "./api.service";

export const getCategory = async (): Promise<ICategory[]> => {
  return instance.get("categories")
}

export const createCategory = async (data: ICategory) => {
  return instance.post("categories", data)
}

// Update

// Delete
