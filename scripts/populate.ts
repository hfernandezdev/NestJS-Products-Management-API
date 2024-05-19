const { createConnection, getRepository } = require('typeorm');
const bcrypt = require('bcrypt');
const { User } = require('../src/users/user.entity');
const { Product } = require('../src/products/product.entity');
const typeOrmConfig = require('../src/ormconfig').default;

async function run() {
  const connection = await createConnection(typeOrmConfig);

  const userRepository = getRepository(User);
  const productRepository = getRepository(Product);

  const users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      username: 'johndoe',
      password: await bcrypt.hash('password123', 10),
      isActive: true,
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      username: 'janedoe',
      password: await bcrypt.hash('password123', 10),
      isActive: true,
    },
  ];

  const products = [
    {
      handle: 'product-1',
      title: 'Product 1',
      description: 'Description for product 1',
      sku: 'SKU001',
      grams: 500.0,
      stock: 10,
      price: 100.0,
      comparePrice: 120.0,
      barcode: '1234567890123',
    },
    {
      handle: 'product-2',
      title: 'Product 2',
      description: 'Description for product 2',
      sku: 'SKU002',
      grams: 600.0,
      stock: 15,
      price: 150.0,
      comparePrice: 170.0,
      barcode: '1234567890124',
    },
  ];

  await userRepository.save(users);
  await productRepository.save(products);

  console.log('Base de datos poblada exitosamente con datos de muestra.');
  await connection.close();
}

run().catch(error => console.error("Error al poblar la base de datos: ", error));
