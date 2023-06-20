import { isEven } from '@myorg/is-even';

export function isOdd(): boolean {
  return !isEven();
}