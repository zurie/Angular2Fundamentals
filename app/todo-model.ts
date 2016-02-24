/**
 * Created by Zurie on 2/24/16.
 */
export class TodoModel {
    status:string = "started";

    constructor(public title:string=""){}

    toggle():void {
        this.status =
            this.status == "started"
            ? "completed"
            : "started"
    }
}
