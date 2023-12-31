import { USER_INSTANCE} from "./axiosInstances";

export async function createUser(data) {
  try {
    const response = await USER_INSTANCE.post(`users/user`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editUser(userId, data) {
  try {
    const response = await USER_INSTANCE.put(`users/${userId}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editUserByMob(mob, data) {
  try {
    const response = await USER_INSTANCE.put(
      `users/update/byMobileNo/${mob}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteUser(userId) {
  try {
    const response = await USER_INSTANCE.delete(`users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getUserById(userId) {
  try {
    const response = await USER_INSTANCE.get(`users/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getUserByMob(mob) {
  try {
    const response = await USER_INSTANCE.get(`users/user/byMobileNo/${mob}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getUsersList() {
  try {
    const response = await USER_INSTANCE.get(`users/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addFavSatation(stationId, data) {
  try {
    const response = await USER_INSTANCE.put(
      `users/addFavoriteStation/${stationId}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function removeFavSatation(stationId, data) {
  try {
    const response = await USER_INSTANCE.put(
      `users/removeFavoriteStation/${stationId}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addVehicle(vehId, data) {
  try {
    const response = await USER_INSTANCE.put(`users/addVehicle/${vehId}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function removeVehicle(vehId, data) {
  try {
    const response = await USER_INSTANCE.put(
      `users/removeVehicle${vehId}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addRfidTag(Id, data) {
  try {
    const response = await USER_INSTANCE.put(`users/addRfidTag/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function removeRfidTag(Id, data) {
  try {
    const response = await USER_INSTANCE.put(`users/removeRfidTag/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function removeRfidTagById(Id, data) {
  try {
    const response = await USER_INSTANCE.put(
      `users/removeRfidTagById/${Id}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fromWallet(Id, data) {
  try {
    const response = await USER_INSTANCE.put(
      `users/deductFromWallet/${Id}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function toWallet(Id, data) {
  try {
    const response = await USER_INSTANCE.put(`users/addToWallet/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function userRfidAuth() {
  // ? Confusion to 111222333444 is id or  not?
  try {
    const response = await USER_INSTANCE.get(
      `users/transaction/rfid-authenticate/111222333444`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function userTransaction(Id) {
  try {
    const response = await USER_INSTANCE.put(
      `users/transaction/authenticate/${Id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
