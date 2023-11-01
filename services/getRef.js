export async function getRef(num) {
   try {
      const response = await fetch(`http://test-ws.sial.cl:3112/v1/CodigoReferido?id=${num}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      });

      if (response.status === 200) {
         console.log("Exite del Referido");
      }
      if (response.status === 400) {
       console.log("Referido no exite");
      } else {
         const errorData = await response.json();
         throw new Error(`Error en la solicitud: ${errorData.message}`);
      }
      
      return response.status;
   } catch (error) {
      throw new Error("Error en la solicitud");
   }
}
