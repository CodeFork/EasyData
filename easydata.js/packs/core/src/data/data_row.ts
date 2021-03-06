import { DataColumn, DataColumnList } from "./data_column";

export class DataRow {

    constructor(
        private columns: DataColumnList, 
        private values: any[]) {}

    public size(): number {
        return this.values.length;
    }

    public getValue(colIdOrIndex: number | string): any {

        let index: number;
        if (typeof colIdOrIndex === "string") {
            index = this.columns.getIndex(colIdOrIndex);
            if (index === undefined) {
                throw new RangeError(`No column with id '${colIdOrIndex}'`);
            }
        }
        else {
            index = colIdOrIndex;
        }

        if (index >= this.values.length)
            throw new RangeError("Out of range: " + index);

        return this.values[index];
    }
    
}