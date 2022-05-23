import { PrismaClient } from '@prisma/client';

interface CustomNodeJsGlobal {
  prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = db;

export default db;
