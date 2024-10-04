import { prisma } from '../databases/prisma/prisma-client';

export const getOrdersYear: any = () => {
    return prisma.order.findMany();
};
