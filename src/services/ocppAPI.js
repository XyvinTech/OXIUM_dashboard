import { OCPP_INSTANCE } from "./axiosInstances";

export async function remoteStart(data) {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.post(
      `ocpp/remoteStartTransaction/GOEC123`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function remoteStop(data) {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.post(
      `ocpp/remoteStopTransaction/GOEC123`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function clearCache() {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/clear-cache/GOEC123`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function unlock(data) {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.post(
      `ocpp/unlock-connector/GOEC123`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function reset() {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/reset/GOEC123`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function changeConfig(data) {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.post(
      `ocpp/unlock-connector/GOEC123`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
