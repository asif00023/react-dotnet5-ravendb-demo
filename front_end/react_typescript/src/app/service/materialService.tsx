import axios, { AxiosResponse } from 'axios';
import Material from "src/app/model/Material";
import { API_BASE_URL } from 'src/appConfig';


export const getAllMaterialData = async (): Promise<Material[]> => {

  try {    
    const url="material";
    const response = await fetch(`${API_BASE_URL}${url}`);
    const data = await response.json();
    return data.responseBody.objectVal; 
  } catch (error) {
    console.error('Error fetching common data:', error);
    throw error;
  }
};

export const getMaterialDataById = async (id?:string): Promise<Material> => {

        try {    
          const url="material/"+id;
          const response = await fetch(`${API_BASE_URL}${url}`);
          const data = await response.json();
          return data.responseBody.objectVal; 
        } catch (error) {
          console.error('Error fetching common data:', error);
          throw error;
        }
};

export const saveMaterialData = async (material?:Material): Promise<Material[]> => {

  try {    
    const url="material";
    const response=await axios.post(`${API_BASE_URL}${url}`, material);
    const data =await response.data;
    return data;
  } catch (error) {
    console.error('Error fetching common data:', error);
    throw error;
  }
};

export const updateMaterialData = async (id?:string,material?:Material): Promise<Material[]> => {

  try {    
    const url="material/"+id;
    const response=await axios.put(`${API_BASE_URL}${url}`, material);
    const data =await response.data;
    return data;
  } catch (error) {
    console.error('Error fetching common data:', error);
    throw error;
  }
};