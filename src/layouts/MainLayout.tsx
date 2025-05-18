import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { type ReactNode } from 'react';
import { AppHeader } from 'src/components/Header';
import { SiderContent } from 'src/components/Sider';

export interface ILayoutProps {
    title: string;
    children: ReactNode;
}

export const MainLayout = (props: ILayoutProps) => {
    const { children, title } = props;

    return (
        <Layout>
            <Header>
                <AppHeader />
            </Header>
            <Layout>
                <Sider width={200}>
                    <SiderContent />
                </Sider>
                <Layout className="content-layout">
                    <h2>{title}</h2>
                    <Content className="content-container">{children}</Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
