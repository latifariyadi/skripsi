import React from 'react';
import { Card, Col, Row } from 'antd';

function Pengumuman() {
    return (
        <div className="site-card-border-less-wrapper">
            <div></div>
            <Card title="PENGUMUMAN" bordered={false} style={{ width: "100%" }}>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                    <Col span={24}>
                        <Card title="Pelaksanaan Ujian Tengah Semester" bordered={false}>
                        Ujian Tengah Semester akan dilaksankan mulai dari tanggal 5 januari - 12 januari 2022
                        </Card>
                    </Col>
                    </Row>
                </div>,
        </Card>
        </div>
    );
}

export default Pengumuman;