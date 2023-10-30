export async function creationUser(data) {
   try {
      const response = await fetch("http://test-ws.sial.cl:3113/v1/RegistroCliente/", {
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

async function main() {
   let datarmada = {
      nombre: "Eduard2o",
      apellido: "Med2rano",
      direccion: "ca2llex",
      ciudad: "Regio2n Metropolitana",
      estado: "a2",
      telefono: "a2",
      email: "tes2t31212@gmail.com",
      nro_referido: "AB15422",
      zip_code: "12224455",
      usuario: "test8252423@gmail.com",
      password: "dem2o",
   };

   try {
      const res = await creationUser(datarmada);
      console.log(res.status);
   } catch (error) {
      console.error(error.message);
   }
}

main();
