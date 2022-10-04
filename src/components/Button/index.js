import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

function Button({
  to,
  href,
  primary = false,
  outline = false,
  rounded = false,
  disabled = false,
  text = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  //Delete Event listeners when button is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  const classes = clsx(styles.wrapper, {
    [styles.disabled]: disabled,
    [styles.rounded]: rounded,
    [styles.outline]: outline,
    [styles.primary]: primary,
    [styles.text]: text,
    [styles.small]: small,
    [styles.large]: large,
    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.title}>{children}</span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
