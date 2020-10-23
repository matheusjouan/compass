import React, {
  InputHTMLAttributes,
  useState,
  useRef,
  useCallback,
} from 'react';

//
import { animated, useSpring } from 'react-spring';
//
import userIcon from '../../assets/images/VectorUser.svg';
import passwordIcon from '../../assets/images/Vector.svg';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error: boolean;
  icon?: string;
}
const Input: React.FC<InputProps> = ({ name, error, icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const transitionIcon = useSpring({
    transform: isFilled ? 'translateX(-70px)' : ' translateX(0px)',
  });

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isErrored={error} isFocused={isFocused} isFilled={isFilled}>
      <input
        ref={inputRef}
        type="text"
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />

      <animated.img
        src={icon === 'userIcon' ? userIcon : passwordIcon}
        alt=""
        style={transitionIcon}
      />
    </Container>
  );
};

export default Input;
