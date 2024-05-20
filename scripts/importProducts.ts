const fs = require('fs');
const csv = require('csv-parser');
const { createConnection, getRepository } = require('typeorm');
const { Product } = require('../src/products/product.entity');
const typeOrmConfig = require('../src/ormconfig').default;

async function importProductsFromCsv(filePath) {
  try {
    const connection = await createConnection(typeOrmConfig);

    const savePromises = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {

        const handle = row['Handle'];
        const title = row['Title'];
        const description = row['Description'];
        const sku = row['SKU'];
        const grams = parseFloat(row['Grams']);
        const stock = parseInt(row['Stock']);
        const price = parseFloat(row['Price']);
        const comparePrice = parseFloat(row['Compare Price']);
        const barcode = row['Barcode'];

        if (!handle || !title || !description || !sku || !barcode) {
          console.error(`Invalid row: ${JSON.stringify(row)}`);
          return;
        }

        const product = new Product();
        product.handle = handle;
        product.title = title;
        product.description = description;
        product.sku = sku;
        product.grams = grams || 0;
        product.stock = stock || 0;
        product.price = price || 0;
        product.comparePrice = comparePrice || 0;
        product.barcode = barcode;

        savePromises.push(getRepository(Product).save(product));
      })
      .on('end', async () => {
        try {
          await Promise.all(savePromises);
          console.log('Importación completa.');
        } catch (error) {
          console.error('Error durante la importación: ', error);
        } finally {
          await connection.close();
        }
      });
  } catch (error) {
    console.error('Error durante la importación: ', error);
  }
}

const filePath = './data/Productos prueba técnica.csv';
importProductsFromCsv(filePath);
