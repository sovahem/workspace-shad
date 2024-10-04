import { getOrdersYear } from '../../controllers/order.controller';

export type DashboardViewmodelProps = {};

export const DashboardViewmodel = async () => {
    const ordersYear = await getOrdersYear();

    return {
        ordersYear,
    };
};
