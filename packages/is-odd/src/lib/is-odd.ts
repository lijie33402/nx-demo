import { isEven } from '@myorg/is-even';

export function isOdd(x: number): boolean {
  // console.log(x);
  
  return !isEven(x);
}