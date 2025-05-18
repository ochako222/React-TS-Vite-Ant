import { Anchor, Button, Drawer, Menu, MenuProps } from 'antd';
import { useEffect, useState } from 'react';

const items1: MenuProps['items'] = ['1', '2', '3', '4', '5', '6'].map((key) => ({
    key,
    label: `nav ${key}`
}));

export const AppHeader = () => {
    return (
        <>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items1}
                style={{ flex: 1, minWidth: 0 }}
            />
        </>
    );
};
