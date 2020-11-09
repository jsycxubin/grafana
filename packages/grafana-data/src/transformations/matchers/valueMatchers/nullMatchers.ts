import { Field } from '../../../types/dataFrame';
import { ValueMatcherInfo } from '../../../types/transformations';
import { ValueMatcherID } from '../ids';
import { ValueMatcherOptions } from './types';

const isNullMatcher: ValueMatcherInfo<ValueMatcherOptions> = {
  id: ValueMatcherID.isNull,
  name: 'Is null',
  description: 'Match where value for given field is null.',
  get: () => {
    return (valueIndex: number, field: Field) => {
      const value = field.values.get(valueIndex);
      return value === null;
    };
  },
  getOptionsDisplayText: () => {
    return `Matches all rows where field is null.`;
  },
  isApplicable: () => true,
};

export const getNullValueMatchers = (): ValueMatcherInfo[] => [isNullMatcher];