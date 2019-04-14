// tslint:disable-next-line: no-namespace
namespace PPHappyHandingInModel {
    export interface WorkModel {
        id: string;
        name: string;
        description: string;
        deadLine: Date;
    }

    export interface UploadImageModel {
        images: string[];
        taskId: number;
    }

    export interface GetUploadedImagesModel {
        images: string[];
        lastCommitedTime: Date;
    }
}
