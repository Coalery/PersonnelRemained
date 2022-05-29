import { Config } from '../config';

export function min(a: number, b: number): number {
  return a < b ? a : b;
}

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let monthStr = month.toString();
  let dayStr = day.toString();

  if (month < 10) monthStr = '0' + monthStr;
  if (day < 10) dayStr = '0' + dayStr;

  return `${year}-${monthStr}-${dayStr}`;
}

export function calcPercent(curDate: Date): string {
  const { start, end } = Config;

  const startDate = start;
  const endDate = new Date(
    end.getFullYear(),
    end.getMonth(),
    end.getDate(),
    23,
    59,
    59
  );

  const totalDelta = endDate.getTime() - startDate.getTime();
  const curDelta = curDate.getTime() - startDate.getTime();

  const percent = min((curDelta / totalDelta) * 100.0, 100.0).toFixed(15) + '%';

  return percent;
}
