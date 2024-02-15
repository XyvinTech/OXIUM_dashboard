import { NOTIFICATION_URL } from "./axiosInstances";

export async function sendBulkMail(data) {
  try {
    console.log(data);
    const response = await NOTIFICATION_URL.post(`notification/dashboard/email`,data);
    return response.data;
  } catch (error) {
    throw error;
  }
}


export async function sendBulkPushNotification(data) {
  try {
    console.log(data);
    const response = await NOTIFICATION_URL.post(`notification/dashboard/firebase`,data);
    return response.data;
  } catch (error) {
    throw error;
  }
}