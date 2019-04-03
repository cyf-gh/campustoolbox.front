export interface ppProvince {
    code: number;
    name: string;
}

export interface ppArea {
    code: number;
    name: string;
    cityCode: number;
    provinceCode: number;
}

export interface ppCollege {
    id: number;
    name: string;
    short: string;
    zone: string;
    order: number;
}

export interface ppGrade {
    code: number;
    name: string;
}