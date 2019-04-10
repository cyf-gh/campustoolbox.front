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
    originalPrice: number;
    price: number;
    publisherName: string;
    publisherHp: string;
}

export interface ppDemand {
    base: ppBase;
    accecptablePriceMin: number;
    accecptablePriceMax: number;
    publisherName: string;
    publisherHp: string;
}