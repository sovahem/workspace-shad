import { PrismaClient } from '@prisma/client';

export type TPrismaClientSingleton = {
    datasources: {
        db: {
            url: string;
        };
    };
};
export const prismaClientSingleton = (options?: TPrismaClientSingleton) => {
    return new PrismaClient(options);
};

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

export * from '@prisma/client';
