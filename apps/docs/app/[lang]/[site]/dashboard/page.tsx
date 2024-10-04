import { DashboardViewmodel } from '@repo/domain-docs';
import { Text } from '@repo/ui-next/components/ui/text';
import React from 'react';
type PageProps = {
    params: { lang: string; site: string };
    searchParams: {};
};

export default async function ({ params: { lang, site } }: PageProps) {
    const {
        // ordersMonth,
        // currentMonthAmount,
        // previousMonthAmount,
        // currentYear,
        ordersYear,
    } = await DashboardViewmodel();

    console.log(ordersYear);
    return (
        <React.Fragment>
            <div className="flex items-center justify-between space-y-2">
                <Text as="h2" weight={'bold'} size={'3xl'}>
                    Dashboard
                </Text>

                {ordersYear.map((ordersYear) => (
                    <p>{ordersYear.id}</p>
                ))}
            </div>
        </React.Fragment>
    );
}
