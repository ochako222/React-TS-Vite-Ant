import {
    default as image1,
    default as image2,
    default as image3,
    default as image4,
    default as image5,
    default as image6
} from '../../assets/images/modern-design.jpg';

import { Card, Col, Row } from 'antd';
const { Meta } = Card;

export const Feature = () => {
    return (
        <div id="main-feature" className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                </div>
                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img alt="Modern Design" src={image1} />}>
                            <Meta title="Modern Design" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img alt="Test" src={image2} />}>
                            <Meta title="Clean and Elegant" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img alt="Test" src={image3} />}>
                            <Meta title="Great Support" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img alt="Test" src={image4} />}>
                            <Meta title="Easy to customise" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img alt="Test" src={image5} />}>
                            <Meta title="Unlimited Features" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img alt="Test" src={image6} />}>
                            <Meta title="Advanced Options" />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
