import { formatTime, orderScheduler } from './orderScheduler';

describe('format time function', () => {
  test('see if format time correctly', () => {
    expect(formatTime(0)).toBe('00:00');
    expect(formatTime(60)).toBe('01:00');
    expect(formatTime(275)).toBe('04:35');
    expect(formatTime(275)).toBe('333:20');
  });
});

describe('order scheduler', () => {
  test('see if order scheduler handles empty names', () => {
    expect(orderScheduler([])).toBe('no orders');
  });

  test('see if order scheduler handle a name', () => {
    const expected =
      '00:00 Prepare sandwich for Nicks \n' +
      '01:00 Serve sandwich for Nicks  \n' +
      '01:30 Take a Break  \n';
    expect(orderScheduler(['Nicks'])).toBe(expected);
  });

  test('see if order scheduler handle multiple names', () => {
    const expected =
      '00:00 Prepare sandwich for Tim \n' +
      '01:00 Serve sandwich for Tim  \n' +
      '01:30 Prepare sandwich for Jon \n' +
      '02:30 Serve sandwich for Jon  \n' +
      '03:00 Prepare sandwich for Nick \n' +
      '04:00 Serve sandwich for Nick  \n' +
      '04:30 Take a Break  \n';
    expect(orderScheduler(['Tim', 'Jon', 'Nick'])).toBe(expected);
  });
});
