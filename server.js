const axios = require('axios'); // Instale axios: npm install axios

// ... (código del servidor OCPP)

server.on('StartTransaction', async (request, accept) => {
  console.log('Inicio de transacción:', request);
  accept({
    transactionId: Math.floor(Math.random() * 1000),
    idTagInfo: {
      status: 'Accepted',
    },
  });

  // Enviar datos al webhook de n8n
  try {
    await axios.post('URL_DEL_WEBHOOK_DE_N8N', {
      evento: 'StartTransaction',
      datos: request,
    });
  } catch (error) {
    console.error('Error al enviar datos a n8n:', error);
  }
});

// ... (haga lo mismo para otros eventos como StopTransaction, MeterValues, etc.)
