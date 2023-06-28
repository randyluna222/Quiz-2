const fs = require('fs');

function copyFile(origin, destiny) {
  fs.readFile ( origin, 'utf8', (error, data) => {
    if (error) {
      console.error('No se puede leer el archivo origen.txt:', error);
      return;
    }

    fs.writeFile(destiny, data, 'utf8', (error) => {
      if (error) {
        console.error('Error al escribir en el archivo de destino:', error);
        return;
      }

      console.log('Se copio el archivo correctamente.');
    });
  });
}

module.exports = copyFile