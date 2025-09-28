const { CentralSystem } = require('ocpp-ts');

const server = new CentralSystem({
  listenPort: 9220,
  onAuthorize: (request, accept) => {
    // Lógica para autorizar un idTag
    console.log('Solicitud de autorización:', request);
    accept({
      idTagInfo: {
        status: 'Accepted',
      },
    });
  },
  onStartTransaction: (request, accept) => {
    // Lógica para iniciar una transacción
    console.log('Inicio de transacción:', request);
    accept({
      transactionId: Math.floor(Math.random() * 1000),
      idTagInfo: {
        status: 'Accepted',
      },
    });
  },
  // ... otros manejadores de eventos OCPP
});

server.listen();
