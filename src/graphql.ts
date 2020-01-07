
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export abstract class IQuery {
    abstract getTests(): Test[] | Promise<Test[]>;
}

export class Test {
    title?: string;
    author?: string;
}
