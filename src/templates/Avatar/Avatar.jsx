import React from 'react';
import { Avatar } from 'antd';

const AvatarTemplate = ({
  size,
  children,
  icon,
  src,
  className,
  style,
  shape,
}) => {
  return (
    <Avatar
      size={size}
      src={src}
      icon={icon}
      shape={shape || 'circle'}
      className={className}
      style={style}
    >
      {children}
    </Avatar>
  );
};

export default AvatarTemplate;
