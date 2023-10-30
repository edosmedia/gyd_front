export async function creationUser(data) {
   try {
      const response = await fetch("http://test-ws.sial.cl:3113/v1/RegitroCliente/", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      });
      const responseData = await response.json();
      const result = {
         status: response.status,
         data: responseData,
      };

      if (response.status === 200) {
         console.log("Creación exitosa");
      } else {
         const errorData = await response.json();
         throw new Error(`Error en la solicitud: ${errorData.message}`);
      }

      console.log(result.status);
      return result;
   } catch (error) {
      throw new Error("Error en la solicitud");
   }
}


let bodyContent = {
   nombre: "Eduardo",
   apellido: "Medrano",
   direccion: "callex",
   ciudad: "Region Metropolitana",
   estado: "a",
   telefono: "a",
   email: "test@gmail.com",
   nro_referido: "AB15422",
   zip_code: "1224455",
   usuario: "test1111222222222222222222221@gmail.com",
   password: "demo",
};

let response = await fetch("http://test-ws.sial.cl:3113/v1/RegitroCliente/", {
   method: "POST",
   body: bodyContent,
   headers: headersList,
});
console.log(await creationUser(bodyContent));
