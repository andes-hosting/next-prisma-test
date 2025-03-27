"use server";
import { dbSalesContacts } from "@/lib/db";

export async function fetchData() {
    const rawData = await dbSalesContacts.sales_contacts.findMany();
    return rawData;
}