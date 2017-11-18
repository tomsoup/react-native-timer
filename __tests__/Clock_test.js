import React from 'react';
import 'react-native';
import { formatSeconds } from '../helpers/Helpers';
import Clock from '../containers/Clock';
import renderer from 'react-test-renderer';


describe("Clock", () => {
  it('render correctly', () => {
    const clock = renderer.create(
    <Clock />
    ).toJSON();
    expect(clock).toMatchSnapshot();
  });

  describe("formating seconds", () => {
    it('should format new seconds', () => {
      const seconds = 615;
      const expected = '10:15';
      const actual = formatSeconds(seconds);
      expect(actual).toBe(expected);
    });

    it('should format new seconds min/sec before 13:00', () => {
      const seconds = 61;
      const expected = '01:01';
      const actual = formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  })
})
