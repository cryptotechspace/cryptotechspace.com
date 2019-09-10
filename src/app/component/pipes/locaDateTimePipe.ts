import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'localDateTime' })
export class LocalDateTimePipe implements PipeTransform {

    transform(value: any) {
        return value.dayOfMonth + ' ' +
            value.month + ' ' +
            value.year + ' ' +
            (value.hour < 10 ? '0' : '') + value.hour + ':' +
            (value.minute < 10 ? '0' : '') + value.minute;
    }

}
