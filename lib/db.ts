//npx prisma db pull --schema=prisma/schema_sale_resources.prisma
//npx prisma generate --schema=prisma/schema_sale_resources.prisma

import { PrismaClient } from '@/prisma/generated/db';
import { env } from 'process';

const prismaSalesContactsSingleton = () => {
    return new PrismaClient({
        datasources: {
            db: { // Usa el nombre definido en el esquem
                url: env.DATABASE_URL,
            },
        },
    });
};

declare const globalThis: {
    prismaSalesContactsGlobal: PrismaClient;
} & typeof global;

// Aquí estamos controlando que solo se cree una instancia en producción
export const dbSalesContacts =
    process.env.NODE_ENV === 'production'
        ? new PrismaClient({
            datasources: {
                db: {
                    url: env.DATABASE_SALES_CONTACTS_URL,
                },
            },
        })
        : globalThis.prismaSalesContactsGlobal ?? prismaSalesContactsSingleton();

// En desarrollo, aseguramos que se reutiliza la misma instancia global
if (process.env.NODE_ENV !== 'production') {
    globalThis.prismaSalesContactsGlobal = dbSalesContacts;
}