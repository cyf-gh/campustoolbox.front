    export interface Relieable {
        id: number;
        city: string;
        name: string;
        district: string;
        email: string;
        phone: string;
        grade: number;
        isConfirmed: boolean;
    }

    export interface AbsVisiable {
        id: number;
        hp: string;
        nickName: string;
        college: string;
    }

    export interface UserInfo {
        relieable: Relieable;
        absVisiable: AbsVisiable;
    }

    export interface UploadInfo {
        name: string;
        hp: string;
    }
