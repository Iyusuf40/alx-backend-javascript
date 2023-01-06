import { RowID, RowElement } from './interface';

/**
 * All three methods below works 
 * We can think of ambient files like header (.h) files in C
 */


/*
let insertRow: (row: RowElement) => RowID;
let deleteRow: (rowId: RowID) => void;
let updateRow: (rowId: RowID, row: RowElement) => RowID;
*/

/*declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
*/

declare module "./crud.js" { 
  /**
   * NOTE: the name of the module must match its import name in the
   * ts file it will be used e.g. the "./crud.js" above. Using 
   * declare module "crud" or "crud.js" failed during testing 
   */
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
