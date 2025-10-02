import baseCoretools from './src/_base/baseCoretools.js';
import isArray from './src/array/isArray.js';
import isObject from './src/object/isObject.js';

// Import all functions for chaining
import array from './src/array';
import async from './src/async';
import color from './src/color';
import convert from './src/convert';
import date from './src/date';
import file from './src/file';
import number from './src/number';
import object from './src/object';
import random from './src/random';
import string from './src/string';
import time from './src/time';
import timestamp from './src/timestamp';
import type from './src/type';

class CoretoolsWrapper {
  constructor(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
  }

  value() {
    return this.__wrapped__;
  }

  // Array methods
  isArray() {
    this.__wrapped__ = array.isArray(this.__wrapped__);
    return this;
  }

  GetUnique() {
    this.__wrapped__ = array.GetUnique(this.__wrapped__);
    return this;
  }

  isIn(...args) {
    this.__wrapped__ = array.isIn(this.__wrapped__, ...args);
    return this;
  }

  isInArray(...args) {
    this.__wrapped__ = array.isInArray(this.__wrapped__, ...args);
    return this;
  }

  isNotIn(...args) {
    this.__wrapped__ = array.isNotIn(this.__wrapped__, ...args);
    return this;
  }

  isNotInArray(...args) {
    this.__wrapped__ = array.isNotInArray(this.__wrapped__, ...args);
    return this;
  }

  isValidIndex(...args) {
    this.__wrapped__ = array.isValidIndex(this.__wrapped__, ...args);
    return this;
  }

  // Object methods
  isEmpty(...args) {
    this.__wrapped__ = object.isEmpty(this.__wrapped__, ...args);
    return this;
  }

  isObject() {
    this.__wrapped__ = object.isObject(this.__wrapped__);
    return this;
  }

  FilterJsonWithoutEmptyKey() {
    this.__wrapped__ = object.FilterJsonWithoutEmptyKey(this.__wrapped__);
    return this;
  }

  hasKey(...args) {
    this.__wrapped__ = object.hasKey(this.__wrapped__, ...args);
    return this;
  }

  hasKeyAll(...args) {
    this.__wrapped__ = object.hasKeyAll(this.__wrapped__, ...args);
    return this;
  }

  hasKeyButNotIn(...args) {
    this.__wrapped__ = object.hasKeyButNotIn(this.__wrapped__, ...args);
    return this;
  }

  hasKeyIn(...args) {
    this.__wrapped__ = object.hasKeyIn(this.__wrapped__, ...args);
    return this;
  }

  hasKeyNonEmpty(...args) {
    this.__wrapped__ = object.hasKeyNonEmpty(this.__wrapped__, ...args);
    return this;
  }

  hasKeyNumberPositive(...args) {
    this.__wrapped__ = object.hasKeyNumberPositive(this.__wrapped__, ...args);
    return this;
  }

  MergeJson(...args) {
    this.__wrapped__ = object.MergeJson(this.__wrapped__, ...args);
    return this;
  }

  RenameObjectProperty(...args) {
    this.__wrapped__ = object.RenameObjectProperty(this.__wrapped__, ...args);
    return this;
  }

  // String methods
  Len() {
    this.__wrapped__ = string.Len(this.__wrapped__);
    return this;
  }

  LenByte() {
    this.__wrapped__ = string.LenByte(this.__wrapped__);
    return this;
  }

  pad(...args) {
    this.__wrapped__ = string.pad(this.__wrapped__, ...args);
    return this;
  }

  padZero(...args) {
    this.__wrapped__ = string.padZero(this.__wrapped__, ...args);
    return this;
  }

  Cut(...args) {
    this.__wrapped__ = string.Cut(this.__wrapped__, ...args);
    return this;
  }

  CutW(...args) {
    this.__wrapped__ = string.CutW(this.__wrapped__, ...args);
    return this;
  }

  EscapeHTML() {
    this.__wrapped__ = string.EscapeHTML(this.__wrapped__);
    return this;
  }

  GetRepeatString(...args) {
    this.__wrapped__ = string.GetRepeatString(this.__wrapped__, ...args);
    return this;
  }

  isAlphaNumeric() {
    this.__wrapped__ = string.isAlphaNumeric(this.__wrapped__);
    return this;
  }

  isCharInRange(...args) {
    this.__wrapped__ = string.isCharInRange(this.__wrapped__, ...args);
    return this;
  }

  isKoreanChar() {
    this.__wrapped__ = string.isKoreanChar(this.__wrapped__);
    return this;
  }

  MergeTagString(...args) {
    this.__wrapped__ = string.MergeTagString(this.__wrapped__, ...args);
    return this;
  }

  SplitTagString() {
    this.__wrapped__ = string.SplitTagString(this.__wrapped__);
    return this;
  }

  // Number methods
  isNumber() {
    this.__wrapped__ = number.isNumber(this.__wrapped__);
    return this;
  }

  isNumberNegative() {
    this.__wrapped__ = number.isNumberNegative(this.__wrapped__);
    return this;
  }

  isNumberPositive() {
    this.__wrapped__ = number.isNumberPositive(this.__wrapped__);
    return this;
  }

  isZero() {
    this.__wrapped__ = number.isZero(this.__wrapped__);
    return this;
  }

  isApproxEqual(...args) {
    this.__wrapped__ = number.isApproxEqual(this.__wrapped__, ...args);
    return this;
  }

  FormatBytes(...args) {
    this.__wrapped__ = number.FormatBytes(this.__wrapped__, ...args);
    return this;
  }

  GetDecimalPoint() {
    this.__wrapped__ = number.GetDecimalPoint(this.__wrapped__);
    return this;
  }

  // Date methods
  isDate() {
    this.__wrapped__ = date.isDate(this.__wrapped__);
    return this;
  }

  isDateRangeSet() {
    this.__wrapped__ = date.isDateRangeSet(this.__wrapped__);
    return this;
  }

  isInDateRange(...args) {
    this.__wrapped__ = date.isInDateRange(this.__wrapped__, ...args);
    return this;
  }

  isSameDate(...args) {
    this.__wrapped__ = date.isSameDate(this.__wrapped__, ...args);
    return this;
  }

  isSameDateRange(...args) {
    this.__wrapped__ = date.isSameDateRange(this.__wrapped__, ...args);
    return this;
  }

  GetAge() {
    this.__wrapped__ = date.GetAge(this.__wrapped__);
    return this;
  }

  GetDateInt() {
    this.__wrapped__ = date.GetDateInt(this.__wrapped__);
    return this;
  }

  GetDateRangeToNow() {
    this.__wrapped__ = date.GetDateRangeToNow(this.__wrapped__);
    return this;
  }

  GetDateRangeToNowStartEnd() {
    this.__wrapped__ = date.GetDateRangeToNowStartEnd(this.__wrapped__);
    return this;
  }

  GetDatesBetween(...args) {
    this.__wrapped__ = date.GetDatesBetween(this.__wrapped__, ...args);
    return this;
  }

  GetDayAgo(...args) {
    this.__wrapped__ = date.GetDayAgo(this.__wrapped__, ...args);
    return this;
  }

  GetDayDiffBetween(...args) {
    this.__wrapped__ = date.GetDayDiffBetween(this.__wrapped__, ...args);
    return this;
  }

  GetDayDiffNow() {
    this.__wrapped__ = date.GetDayDiffNow(this.__wrapped__);
    return this;
  }

  GetDayEnd() {
    this.__wrapped__ = date.GetDayEnd(this.__wrapped__);
    return this;
  }

  GetDayStart() {
    this.__wrapped__ = date.GetDayStart(this.__wrapped__);
    return this;
  }

  GetEndOfWeek() {
    this.__wrapped__ = date.GetEndOfWeek(this.__wrapped__);
    return this;
  }

  GetFormattedDate(...args) {
    this.__wrapped__ = date.GetFormattedDate(this.__wrapped__, ...args);
    return this;
  }

  GetLastSunday() {
    this.__wrapped__ = date.GetLastSunday(this.__wrapped__);
    return this;
  }

  GetMonthDiff(...args) {
    this.__wrapped__ = date.GetMonthDiff(this.__wrapped__, ...args);
    return this;
  }

  GetMonthRange() {
    this.__wrapped__ = date.GetMonthRange(this.__wrapped__);
    return this;
  }

  GetNextMonth() {
    this.__wrapped__ = date.GetNextMonth(this.__wrapped__);
    return this;
  }

  GetNextYearMonth() {
    this.__wrapped__ = date.GetNextYearMonth(this.__wrapped__);
    return this;
  }

  GetPrevMonth() {
    this.__wrapped__ = date.GetPrevMonth(this.__wrapped__);
    return this;
  }

  GetStartOfWeek() {
    this.__wrapped__ = date.GetStartOfWeek(this.__wrapped__);
    return this;
  }

  GetThisMonthRange() {
    this.__wrapped__ = date.GetThisMonthRange(this.__wrapped__);
    return this;
  }

  GetTomorrow() {
    this.__wrapped__ = date.GetTomorrow(this.__wrapped__);
    return this;
  }

  GetYesterday() {
    this.__wrapped__ = date.GetYesterday(this.__wrapped__);
    return this;
  }

  SubtractMonths(...args) {
    this.__wrapped__ = date.SubtractMonths(this.__wrapped__, ...args);
    return this;
  }

  SubtractYears(...args) {
    this.__wrapped__ = date.SubtractYears(this.__wrapped__, ...args);
    return this;
  }

  ymdhhmmToDate(...args) {
    this.__wrapped__ = date.ymdhhmmToDate(this.__wrapped__, ...args);
    return this;
  }

  ymdSlotNoToDate(...args) {
    this.__wrapped__ = date.ymdSlotNoToDate(this.__wrapped__, ...args);
    return this;
  }

  ymdToDate() {
    this.__wrapped__ = date.ymdToDate(this.__wrapped__);
    return this;
  }

  // Time methods
  hhmm2min() {
    this.__wrapped__ = time.hhmm2min(this.__wrapped__);
    return this;
  }

  hhmm2slotNo15min() {
    this.__wrapped__ = time.hhmm2slotNo15min(this.__wrapped__);
    return this;
  }

  hhmm2slotNo30min() {
    this.__wrapped__ = time.hhmm2slotNo30min(this.__wrapped__);
    return this;
  }

  hhmm2slotNoByDuration(...args) {
    this.__wrapped__ = time.hhmm2slotNoByDuration(this.__wrapped__, ...args);
    return this;
  }

  hhmmSplit() {
    this.__wrapped__ = time.hhmmSplit(this.__wrapped__);
    return this;
  }

  slotNo2hhmm() {
    this.__wrapped__ = time.slotNo2hhmm(this.__wrapped__);
    return this;
  }

  // Timestamp methods
  GetDateFromMs() {
    this.__wrapped__ = timestamp.GetDateFromMs(this.__wrapped__);
    return this;
  }

  GetDateFromTs() {
    this.__wrapped__ = timestamp.GetDateFromTs(this.__wrapped__);
    return this;
  }

  GetUnix() {
    this.__wrapped__ = timestamp.GetUnix(this.__wrapped__);
    return this;
  }

  isTimestamp() {
    this.__wrapped__ = timestamp.isTimestamp(this.__wrapped__);
    return this;
  }

  // Type methods
  isFunction() {
    this.__wrapped__ = type.isFunction(this.__wrapped__);
    return this;
  }

  // Color methods
  isSameColor(...args) {
    this.__wrapped__ = color.isSameColor(this.__wrapped__, ...args);
    return this;
  }

  // Convert methods
  ConvertDecimalToHex() {
    this.__wrapped__ = convert.ConvertDecimalToHex(this.__wrapped__);
    return this;
  }

  ConvertHSLToHex(...args) {
    this.__wrapped__ = convert.ConvertHSLToHex(this.__wrapped__, ...args);
    return this;
  }

  // File methods
  GetFileExtension() {
    this.__wrapped__ = file.GetFileExtension(this.__wrapped__);
    return this;
  }

  MakePath(...args) {
    this.__wrapped__ = file.MakePath(this.__wrapped__, ...args);
    return this;
  }
}

function coretools(value) {
  if (isObject(value) && !isArray(value)) {
    if (value instanceof CoretoolsWrapper) {
      return value;
    }
  }
  return new CoretoolsWrapper(value);
}

// Ensure wrappers are instances of `baseCoretools`.
coretools.prototype = baseCoretools.prototype;
coretools.prototype.constructor = coretools;

export default coretools;
