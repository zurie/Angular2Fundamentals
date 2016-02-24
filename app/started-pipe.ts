/**
 * Created by Zurie on 2/24/16.
 */
import {Pipe} from "angular2/core";

@Pipe({
    name: "started"
})

export class StartedPipe{
    transform(value, [status]) {
        return value.filter((item)=> item.status === status);
    }
}
