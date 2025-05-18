import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { MenuProps, Menu } from 'antd';
import React from 'react';

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`
        };
    }
);

export const SiderContent = () => {
    return (
        <>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
            />
        </>
    );
};
