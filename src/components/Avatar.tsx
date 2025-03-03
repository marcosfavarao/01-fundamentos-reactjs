import React from 'react';
import styles from './Avatar.module.css';

type AvatarProps = {
  hasBorder?: boolean;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function Avatar({ hasBorder = true, alt = '', ...rest }: AvatarProps) {
  return (
    <>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        alt={alt}
        {...rest}
      />
    </>
  )
}