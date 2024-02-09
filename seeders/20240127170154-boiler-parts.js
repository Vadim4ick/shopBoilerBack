const { faker } = require('@faker-js/faker');

('use strict');

const boilerManufacturers = [
  'Ariston',
  'Chaffoteaux&Maury',
  'Baxi',
  'Bongioanni',
  'Saunier Duval',
  'Buderus',
  'Strategist',
  'Henry',
  'Northwest',
];

const partsManufacturers = [
  'Azure',
  'Gloves',
  'Salmon',
  'Cambridgeshire',
  'Montana',
  'Sensor',
  'Lesly',
  'Radain',
  'Gasoline',
  'Croatia',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'BoilerParts',
      [...Array(100)].map(() => ({
        boiler_manufacturer:
          boilerManufacturers[
            Math.floor(Math.random() * boilerManufacturers.length)
          ],

        parts_manufacturer:
          partsManufacturers[
            Math.floor(Math.random() * boilerManufacturers.length)
          ],

        price: faker.number.int({ max: 10000 }),

        name: faker.lorem.sentence(3),

        description: faker.lorem.sentence(10),

        images: JSON.stringify(
          Array(7)
            .fill(0)
            .map(
              () =>
                `${faker.image.urlLoremFlickr({ category: 'technics' })}?random=${faker.number.int({ max: 30 })}`,
            ),
        ),

        vendor_code: faker.internet.password(),

        in_stock: faker.number.int({ min: 0, max: 9 }),

        bestsellers: faker.datatype.boolean(),

        new: faker.datatype.boolean(),

        popularity: faker.number.int({ min: 0, max: 100 }),

        compatibility: faker.lorem.sentence(7),

        createdAt: new Date(),

        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BoilerParts', null, {});
  },
};
