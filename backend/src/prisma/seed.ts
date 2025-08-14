// backend/src/prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        id: 'clx001',
        email: 'user1@lovelink.com',
        name: 'Alice',
        birthDate: new Date('1995-03-10'),
        gender: 'FEMALE',
        preferredGender: 'MALE',
        photos: {
          create: [{ url: 'https://example.com/a1.jpg', isMain: true }],
        },
        location: {
          create: { lat: 40.7128, lng: -74.006, city: 'New York' },
        },
      },
      {
        id: 'clx002',
        email: 'user2@lovelink.com',
        name: 'Bob',
        birthDate: new Date('1992-07-15'),
        gender: 'MALE',
        preferredGender: 'FEMALE',
        photos: {
          create: [{ url: 'https://example.com/b1.jpg', isMain: true }],
        },
        location: {
          create: { lat: 40.7589, lng: -73.9851, city: 'Manhattan' },
        },
      },
    ],
  });
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});