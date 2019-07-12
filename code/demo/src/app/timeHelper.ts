import * as dayjs from 'dayjs';
import * as uuid4 from 'uuid/v4';

type formatType = 'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD HH:mm' | 'YYYY-MM-DD' | 'YYYY-MM-DDTHH:mm:ss';

export class F2eHelper {

  static getTimestampToDateStr(
    timestamp: number,
    format: formatType,
  ) {
    return dayjs.unix(timestamp).format(format);
  }

  static getUUID4() {
    return uuid4();
  }

}
