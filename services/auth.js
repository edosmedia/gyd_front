import { apiURL, authToken } from "../config/config_environment";
export async function auth(data) {
   try {
      const response = await fetch(`${apiURL}autentificacion/`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
         },
         body: JSON.stringify(data),
      });

      const responseData = await response.json();
      const result = {
         status: response.status,
         data: responseData,
      };

      if (response.status === 200) {
         const tokenUser = responseData.token;
         let userProfile = JSON.stringify(responseData);
         localStorage.setItem("profile", userProfile);
         localStorage.setItem("token", tokenUser);
         console.log("Login Exitoso");
         console.log("Token de autenticación:", tokenUser);
      } else if (response.status === 401) {
         // Código de estado 401 (Unauthorized)
         console.error("Error de autenticación");
         // Puedes manejar este caso de alguna manera
      } else if (response.status === 400) {
         // Código de estado 400 (Bad Request)
         const errorData = await response.json();
         throw new Error(`Error en la solicitud: ${errorData.message}`);
      } else {
         throw new Error("Error en la solicitud");
      }

      return result;
   } catch (error) {
      console.error(error.message);
      throw error;
   }
}
