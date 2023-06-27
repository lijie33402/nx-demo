import { Button } from '@mui/material';
import { isOdd } from '@myorg/is-odd';
import { useEffect } from 'react';


export function MyNewLib() {
  console.log(isOdd(1));
  useEffect(() => {
    console.log(1);
    
  }, [])
  return (
    <div>
      <h1>Welcome to MyNewLib!</h1>
      <Button>Hello</Button>
    </div>
  );
}

export default MyNewLib;