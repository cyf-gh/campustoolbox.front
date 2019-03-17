// tslint:disable-next-line: no-namespace
namespace PPHappyHandingInModel {
    export interface PrefixModel {
        id: string;
        name: string;
        end: string;
        start: string;
        includeList: string[];
        excludeList: string[];
        memberNameList: string[];
        indexList: string[];
    }
}