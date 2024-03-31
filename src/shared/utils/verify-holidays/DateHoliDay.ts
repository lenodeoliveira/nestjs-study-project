import HoliDay from 'date-holidays';

export class DateHoliDay {
  private holiday: HoliDay;
  constructor() {
    this.holiday = new HoliDay({
      types: ['public'],
      timezone: 'America/Sao_paulo',
    });
    this.holiday.init('BR');
  }

  public isHoliDay(date: Date): boolean {
    const possibleOptions: { end: Date }[] | false =
      this.holiday.isHoliday(date);

    const isHoliDay = Array.isArray(possibleOptions);

    return isHoliDay;
  }
}
