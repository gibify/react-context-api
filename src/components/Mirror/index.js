import React from 'react';

import { useCount } from '../../Context/Count';

function Mirror() {
  const { count } = useCount();

  return (
    <span>
      <b>Mirror: {count}</b>
    </span>

  );
    
}

export default Mirror;