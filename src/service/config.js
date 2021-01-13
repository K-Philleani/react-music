const devBaseUrl = "http://124.70.71.78:3000";
const proBaseURL = "http://123.207.32.32:9001";

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl : proBaseURL

export const TIMEOUT = 10000;