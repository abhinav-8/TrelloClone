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
    onDragStart,
    onDragEnd,
    onDragLeave,
    onDragEnter,
    onDrop,
    onDragOver,
}){
    return (
        <Card
            bordered={bordered}
            draggable={draggable}
            title={title}
            hoverable={hoverable}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragLeave={onDragLeave}
            onDragEnter={onDragEnter}
            onDrop={onDrop}
            onDragOver={onDragOver}
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