import {Outlet} from 'react-router-dom'
import {Col, Row} from "antd";

function Auth() {
    return (
        <div className="mt">
            <Row>
                <Col offset={6} span={12}>
                    <Outlet/>
                </Col>
            </Row>
        </div>
    )
}

export default Auth