import { RowID, RowElement } from './interface';

let insertRow: (row: RowElement) => RowID;
let deleteRow: (rowId: RowID) => void;
let updateRow: (rowId: RowID, row: RowElement) => RowID;

declare module crud {
}
