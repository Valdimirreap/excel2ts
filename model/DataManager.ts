declare let require: any;
//import { datas } from './Datas';
//Datas 不要手动修改4  import导入文件
@@import
//Datas 不要手动修改4

export namespace DataManager {
    //Datas 不要手动修改1 表变量定义
    // export let AIDatas: Array<AIData>;
    // export let AIDatasById: { [key: number]: AIData };
    @@varDefined
    //Datas 不要手动修改1
    export function init(): void {
        if(CC_EDITOR) return;
        let datas=require("Datas.js");
        //Datas 不要手动修改2 变量的赋值
        //for example: 
        // AIDatas = datas["AI"];
        // AIDatasById = getsById<AIData>(AIDatas);
        //
        @@funcContent
        //Datas 不要手动修改2
    }

    //数组化数据,使其可以使用下标访问
    function arrayData(key: string, datas: { [key in string]: any }) {
        let values = [];
        let items = datas[key];
        for (let key1 in items) {
            values.push(items[key1]);
        }
        return values;
    }
    function getsById(datas: Array<any>): { [key: number]: any } {
        let datasById: { [key: number]: any } = {};
        for (let data of datas) {
            datasById[data.ID] = data;
        }
        return datasById;
    }
}
DataManager.init();
