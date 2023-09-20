import { Card } from 'antd';
import React from 'react';

export default function CardTemplate({
    bordered,
    title,
    draggable,
    hoverable,
    className,  
    children,
    onClick,
}){
    return (
        <Card
            bordered={bordered}
            draggable={draggable}
            title={title}
            hoverable={hoverable}
            className={className}
            onClick={onClick}
            bodyStyle={{
                padding: '0px'
            }}
        >
            {children}
        </Card>
    )
} 