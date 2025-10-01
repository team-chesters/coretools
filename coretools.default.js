import { VERSION } from './coretools.const';

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

import coretools from './coretools.wrapper';

// Array functions
coretools.GetUnique = array.GetUnique;
coretools.isArray = array.isArray;
coretools.isIn = array.isIn;
coretools.isInArray = array.isInArray;
coretools.isNotIn = array.isNotIn;
coretools.isNotInArray = array.isNotInArray;
coretools.isValidIndex = array.isValidIndex;

// Async functions
coretools.ExecuteCallbackWithParams = async.ExecuteCallbackWithParams;
coretools.Sleep = async.Sleep;

// Color functions
coretools.isSameColor = color.isSameColor;

// Convert functions
coretools.ConvertDecimalToHex = convert.ConvertDecimalToHex;
coretools.ConvertHSLToHex = convert.ConvertHSLToHex;

// Date functions
coretools.GetAge = date.GetAge;
coretools.GetDateInt = date.GetDateInt;
coretools.GetDateRangeToNow = date.GetDateRangeToNow;
coretools.GetDateRangeToNowStartEnd = date.GetDateRangeToNowStartEnd;
coretools.GetDatesBetween = date.GetDatesBetween;
coretools.GetDayAgo = date.GetDayAgo;
coretools.GetDayDiffBetween = date.GetDayDiffBetween;
coretools.GetDayDiffNow = date.GetDayDiffNow;
coretools.GetDayEnd = date.GetDayEnd;
coretools.GetDayStart = date.GetDayStart;
coretools.GetEndOfWeek = date.GetEndOfWeek;
coretools.GetFormattedDate = date.GetFormattedDate;
coretools.GetLastSunday = date.GetLastSunday;
coretools.GetMonthDiff = date.GetMonthDiff;
coretools.GetMonthRange = date.GetMonthRange;
coretools.GetNextMonth = date.GetNextMonth;
coretools.GetNextYearMonth = date.GetNextYearMonth;
coretools.GetPrevMonth = date.GetPrevMonth;
coretools.GetStartOfWeek = date.GetStartOfWeek;
coretools.GetThisMonthRange = date.GetThisMonthRange;
coretools.GetTomorrow = date.GetTomorrow;
coretools.GetYesterday = date.GetYesterday;
coretools.isDate = date.isDate;
coretools.isDateRangeSet = date.isDateRangeSet;
coretools.isInDateRange = date.isInDateRange;
coretools.isSameDate = date.isSameDate;
coretools.isSameDateRange = date.isSameDateRange;
coretools.SubtractMonths = date.SubtractMonths;
coretools.SubtractYears = date.SubtractYears;
coretools.ymdhhmmToDate = date.ymdhhmmToDate;
coretools.ymdSlotNoToDate = date.ymdSlotNoToDate;
coretools.ymdToDate = date.ymdToDate;

// File functions
coretools.GetFileExtension = file.GetFileExtension;
coretools.MakePath = file.MakePath;

// Number functions
coretools.FormatBytes = number.FormatBytes;
coretools.GetDecimalPoint = number.GetDecimalPoint;
coretools.isApproxEqual = number.isApproxEqual;
coretools.isNumber = number.isNumber;
coretools.isNumberNegative = number.isNumberNegative;
coretools.isNumberPositive = number.isNumberPositive;
coretools.isZero = number.isZero;

// Object functions
coretools.FilterJsonWithoutEmptyKey = object.FilterJsonWithoutEmptyKey;
coretools.hasKey = object.hasKey;
coretools.hasKeyAll = object.hasKeyAll;
coretools.hasKeyButNotIn = object.hasKeyButNotIn;
coretools.hasKeyIn = object.hasKeyIn;
coretools.hasKeyNonEmpty = object.hasKeyNonEmpty;
coretools.hasKeyNumberPositive = object.hasKeyNumberPositive;
coretools.isEmpty = object.isEmpty;
coretools.isObject = object.isObject;
coretools.MergeJson = object.MergeJson;
coretools.RenameObjectProperty = object.RenameObjectProperty;

// Random functions
coretools.GenerateGUID = random.GenerateGUID;
coretools.GenerateRandomBytes = random.GenerateRandomBytes;
coretools.GenerateRandomNumberInRange = random.GenerateRandomNumberInRange;

// String functions
coretools.Cut = string.Cut;
coretools.CutW = string.CutW;
coretools.EscapeHTML = string.EscapeHTML;
coretools.GetRepeatString = string.GetRepeatString;
coretools.isAlphaNumeric = string.isAlphaNumeric;
coretools.isCharInRange = string.isCharInRange;
coretools.isKoreanChar = string.isKoreanChar;
coretools.Len = string.Len;
coretools.LenByte = string.LenByte;
coretools.MergeTagString = string.MergeTagString;
coretools.pad = string.pad;
coretools.padZero = string.padZero;
coretools.SplitTagString = string.SplitTagString;

// Time functions
coretools.hhmm2min = time.hhmm2min;
coretools.hhmm2slotNo15min = time.hhmm2slotNo15min;
coretools.hhmm2slotNo30min = time.hhmm2slotNo30min;
coretools.hhmm2slotNoByDuration = time.hhmm2slotNoByDuration;
coretools.hhmmSplit = time.hhmmSplit;
coretools.slotNo2hhmm = time.slotNo2hhmm;

// Timestamp functions
coretools.GetDateFromMs = timestamp.GetDateFromMs;
coretools.GetDateFromTs = timestamp.GetDateFromTs;
coretools.GetUnix = timestamp.GetUnix;
coretools.isTimestamp = timestamp.isTimestamp;

// Type functions
coretools.isFunction = type.isFunction;

/**
 * The semantic version number.
 *
 * @static
 * @memberOf _
 * @type {string}
 */
coretools.version = VERSION;

export default coretools;