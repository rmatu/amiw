import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'mydate',
})
export class MydatePipe implements PipeTransform {
  transform(date: moment.Moment, ...args: unknown[]): string {
    const today = moment();
    const actualDate = moment(date);
    const daysDiff = today.diff(date, 'days');
    const hoursDiff = today.diff(date, 'hours');
    const fromNow = actualDate.fromNow();

    if (!date) {
      return null;
    } else if (today.isSame(date, 'day')) {
      return `Today, ${fromNow}`;
    } else if (daysDiff < 3) {
      return `${hoursDiff} hours ago`;
    } else {
      return `${daysDiff} days ago`;
    }
  }

  //date: "hh:mm:ss dd/MM/yy"
}
