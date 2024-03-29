import { VEHICLE_INSTANCES } from "./axiosInstances";

export async function createVehicle(data) {
  try {
    console.log(data);
    const response = await VEHICLE_INSTANCES.post(`vehicle/create`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editVehicle(Id, data) {
  try {
    const response = await VEHICLE_INSTANCES.put(`vehicle/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteVehicle(Id) {
  try {
    const response = await VEHICLE_INSTANCES.delete(`vehicle/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getVehicleById(Id) {
  try {
    const response = await VEHICLE_INSTANCES.get(`vehicle/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getVehicleList() {
  try {
    const response = await VEHICLE_INSTANCES.get(`vehicle/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getVehicleListForDashboard() {
  try {
    const response = await VEHICLE_INSTANCES.get(`vehicle/dashboard/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}


//!Brand
export async function createBrand(data) {
  try {
    const response = await VEHICLE_INSTANCES.post(`brand/create`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getBrand(data) {
  try {
    const response = await VEHICLE_INSTANCES.get(`brand/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editBrand(Id, data) {
  try {
    const response = await VEHICLE_INSTANCES.put(`brand/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteBrand(Id) {
  try {
    const response = await VEHICLE_INSTANCES.delete(`brand/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getBrandById(Id) {
  try {
    const response = await VEHICLE_INSTANCES.get(`brand/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function vehicleImageUpload(data) {
  try {
    const response = await VEHICLE_INSTANCES.post(`image/upload`,data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
