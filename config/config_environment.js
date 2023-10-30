import { envConfig } from "./env/config";

const environment = "dev"; // Establece esta variable según tu entorno sea dev o prod o etc..

export const apiURL = envConfig[environment].baseUrlApi;
export const authToken = envConfig[environment].token;
