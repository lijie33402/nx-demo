import { Button } from '@mui/material';
import { isOdd } from '@myorg/is-odd';
import { useEffect } from 'react';
import cn from "classnames";
import { useClickAway, useIsomorphicLayoutEffect } from 'ahooks'



export function MyNewLib() {
  console.log(isOdd(1));
  useEffect(() => {
    console.log(1);
    
  }, [])
  useIsomorphicLayoutEffect(() => {
    console.log(useClickAway);
    
  })
  return (
    <div>
      <h1 className={cn('a', 'b')}>Welcome to MyNewLib!</h1>
      <Button>Hello</Button>
    </div>
  );
}

export default MyNewLib;