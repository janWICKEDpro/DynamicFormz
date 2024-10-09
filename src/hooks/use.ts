import { useState } from 'react';

// Example hook code
function useMyCustomHook() {
  const [state, setState] = useState(null);
  // Hook logic here
  return [state, setState];
}

// Export the hook
export { useMyCustomHook };