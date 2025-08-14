// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        id: 'user_1',
        email: 'alice@example.com',
        name: 'Alice',
        birthDate: new Date('1995-01-01'),
        gender: 'FEMALE',
        preferredGender: 'MALE',
      },
      {
        id: 'user_2',
        email: 'bob@example.com',
        name: 'Bob',
        birthDate: new Date('1993-05-10'),
        gender: 'MALE',
        preferredGender: 'FEMALE',
      },
    ],
  });
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});