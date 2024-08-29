
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CustomerGroups {
    group: string;
    group1?: Nullable<string>;
    group2?: Nullable<string>;
    group3?: Nullable<string>;
    group4?: Nullable<string>;
    group5?: Nullable<string>;
}

export interface PaymentMethods {
    typeCredit?: Nullable<string>;
    creditLimit?: Nullable<number>;
    creditUsed?: Nullable<number>;
    amountAvailable?: Nullable<number>;
}

export interface Client {
    uuid: string;
    address?: Nullable<string>;
    blocked?: Nullable<string>;
    cellPhone?: Nullable<string>;
    channel?: Nullable<string>;
    country?: Nullable<string>;
    customerGroups?: Nullable<CustomerGroups>;
    customerSchema?: Nullable<number>;
    distrChan?: Nullable<string>;
    division?: Nullable<string>;
    fiscalCode1?: Nullable<string>;
    fiscalCode2?: Nullable<string>;
    frequency?: Nullable<string>;
    frequencyDays?: Nullable<string>;
    idPortfolio?: Nullable<string>;
    immediateDelivery?: Nullable<string>;
    industryCode?: Nullable<string>;
    industryCode1?: Nullable<string>;
    isEnrollment?: Nullable<boolean>;
    name?: Nullable<string>;
    name2?: Nullable<string>;
    office?: Nullable<string>;
    paymentCondition?: Nullable<string>;
    paymentMethods?: Nullable<Nullable<PaymentMethods>[]>;
    priceGroup?: Nullable<string>;
    priceList?: Nullable<string>;
    routeId?: Nullable<string>;
    salesOrg?: Nullable<string>;
    supplyCenter?: Nullable<string>;
    vendorGroup?: Nullable<string>;
}

export interface IQuery {
    getAllClients(): Client[] | Promise<Client[]>;
    getClientById(id: string): Client | Promise<Client>;
    getAllPortfoliosByClientId(id: string): Portfolio[] | Promise<Portfolio[]>;
    getPortfolioById(id: string): Portfolio | Promise<Portfolio>;
}

export interface PortfolioItemTax {
    taxType?: Nullable<string>;
    taxId?: Nullable<string>;
    rate?: Nullable<number>;
}

export interface PortfolioItemPrice {
    full_price?: Nullable<string>;
    taxes?: Nullable<Nullable<PortfolioItemTax>[]>;
}

export interface PortfolioItem {
    sku?: Nullable<string>;
    title?: Nullable<string>;
    categoryId?: Nullable<string>;
    category?: Nullable<string>;
    brand?: Nullable<string>;
    classification?: Nullable<string>;
    unitsPerBox?: Nullable<string>;
    minOrderUnits?: Nullable<string>;
    packageDescription?: Nullable<string>;
    packageUnitDescription?: Nullable<string>;
    quantity_max_redeem?: Nullable<string>;
    redeem_unit?: Nullable<string>;
    order_reason_redeem?: Nullable<string>;
    sku_redeem?: Nullable<boolean>;
    country?: Nullable<string>;
    customerCode?: Nullable<string>;
    price?: Nullable<PortfolioItemPrice>;
    points?: Nullable<number>;
}

export interface Portfolio {
    uuid: string;
    channel?: Nullable<string>;
    country?: Nullable<string>;
    customerCode?: Nullable<string>;
    items?: Nullable<Nullable<PortfolioItem>[]>;
    route?: Nullable<string>;
}

type Nullable<T> = T | null;
