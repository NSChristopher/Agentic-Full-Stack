// Prisma seed script for menu items
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Clear old data
  await prisma.order.deleteMany();
  await prisma.menuItem.deleteMany();

  // Seed menu items for the ordering system
  await prisma.menuItem.createMany({
    data: [
      { name: "Classic Burger", price: 1299 }, // $12.99
      { name: "Chicken Sandwich", price: 1099 }, // $10.99
      { name: "Veggie Wrap", price: 899 }, // $8.99
      { name: "French Fries", price: 499 }, // $4.99
      { name: "Chicken Wings", price: 1399 }, // $13.99
    ],
  });

  console.log("Seeded menu items!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
