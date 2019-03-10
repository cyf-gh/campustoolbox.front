// tslint:disable-next-line: no-namespace
namespace HappyHandingInModel {
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