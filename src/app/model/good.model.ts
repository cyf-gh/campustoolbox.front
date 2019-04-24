export interface ppBase {
    name: string;
    desc: string;
    publishDate: Date;
    availableTo: number;
    isAvailable: boolean;
    tag: string;
}

export interface ppSupply {
    base: ppBase;
    images: string[];
    priceMax: number;
    priceMin: number;
    publisherName: string;
    publisherHp: string;
}

export interface ppSupplyWithId {
    id: number
    base: ppBase;
    images: string[];
    priceMax: number;
    priceMin: number;
    publisherName: string;
    publisherHp: string;
}

export interface ppDemand {
    base: ppBase;
    priceMin: number;
    priceMax: number;
    publisherName: string;
    publisherHp: string;
}

export interface ppDemandWithId {
    id: number;
    base: ppBase;
    priceMin: number;
    priceMax: number;
    publisherName: string;
    publisherHp: string;
}

export interface ppDemandPublishModel {
    base: ppBase;
    priceMin: number;
    priceMax: number;
}