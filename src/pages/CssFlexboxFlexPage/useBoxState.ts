import {useState} from 'react';

interface BoxState {
  flexGrow: number;
  setFlexGrow: (value: number) => void;
  flexShrink: number;
  setFlexShrink: (value: number) => void;
  flexBasis: number;
  setFlexBasis: (value: number) => void;
}

export function useBoxState(): BoxState {
  const [flexGrow, setFlexGrow] = useState(0);
  const [flexShrink, setFlexShrink] = useState(0);
  const [flexBasis, setFlexBasis] = useState(50);

  return {
    flexGrow,
    setFlexGrow,
    flexShrink,
    setFlexShrink,
    flexBasis,
    setFlexBasis,
  };
}
