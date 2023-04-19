document.addEventListener('DOMContentLoaded', function() {

  $.validator.addMethod("validNombreDesayuno", function(value, element) {
    var validValues = ["desayuno simple", "merienda salada", "merienda personalizada"];
    return this.optional(element) || $.inArray(value, validValues) !== -1;
  }, "Por favor, seleccione un tipo de desayuno válido.");

  $("#formularioProceso").validate({
    rules: {
      nombreDesayuno: {
        required: true,
        validNombreDesayuno: true
      },
      cantidadDesayuno: {
        required: true
      }
    },
    messages: {
      nombreDesayuno: {
        required: "Por favor, seleccione un tipo de desayuno"
      },
      cantidadDesayuno: {
        required: "Por favor, introduzca la cantidad"
      }
    },
    submitHandler: function(e) {
      var nombre = $('input[name="nombreDesayuno"]').val();
      var cantidad = $('input[name="cantidadDesayuno"]').val();
      var precio = 0;
  
      if (nombre == "desayuno simple") {
        precio = 3200;
      }
  
      if (nombre == "merienda salada") {
        precio = 3500;
      }
  
      if (nombre == "merienda personalizada") {
        precio = "Puede variar dependiendo lo que necesites";
      }
  
      var total = precio * cantidad;
  
      var cotizacion = 'Cotización:\n' +
        'Nombre: ' + nombre + '\n' +
        'Precio: $' + precio + '\n' +
        'Cantidad: ' + cantidad + '\n' +
        'Total: $' + total;
  
      // Mostrar la cotización en un cuadro de diálogo
      alert(cotizacion);
  
      // Continuar con el resto del código de generación del PDF y descarga del archivo, si es necesario
      // ...
      // Crear un nuevo objeto jsPDF
      var pdf = new jsPDF();
  
      // Agregar el resumen al documento PDF
      pdf.text(cotizacion, 10, 10);
  
      // Generar el archivo PDF como Blob
      var pdfBlob = pdf.output('blob');
  
      // Crear un enlace de descarga
      var downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(pdfBlob);
      downloadLink.download = 'resumen_proceso.pdf';
      downloadLink.click();
  
      // Liberar el objeto Blob
      URL.revokeObjectURL(pdfBlob);
      console.log('Formulario validado correctamente');
    }
  });
  

  $("form[name='contact']").validate({

    rules: {

      nombre: "required",

      apellido: "required",

      email: {

        required: true,

        email: true

      },

      mensaje: "required"

    },

    messages: {

      nombre: "Por favor, introduzca su nombre",

      apellido: "Por favor, introduzca su apellido",

      email: "Por favor, introduce una dirección de correo electrónico válida",

      mensaje: "Por favor, introduzca su mensaje"

    },

    submitHandler: function(e) {


      // Obtener los valores de los campos del formulario
      const nombre = $('input[name="nombre"]').val();
      const apellido = $('input[name="apellido"]').val();
      const email = $('input[name="email"]').val();
      const mensaje = $('textarea[name="mensaje"]').val();

      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts', // URL de regres.in para la petición de contacto
        method: 'POST', // Método HTTP POST
        data: {
          nombre: nombre,
          apellido: apellido,
          email: email,
          mensaje: mensaje
        },
        success: function(response) {
            // Aquí puedes manejar la respuesta del servidor si es necesario
            console.log('Éxito:', response);
            // Puedes mostrar un mensaje de éxito al usuario
            alert('¡Mensaje enviado con éxito!');
        },
        error: function(xhr, status, error) {
            // Aquí puedes manejar los errores de la petición AJAX si es necesario
            console.error('Error:', error);
            // Puedes mostrar un mensaje de error al usuario
            alert('Error al enviar el mensaje. Por favor inténtelo nuevamente.');
        }
      });
    }

  });

});
