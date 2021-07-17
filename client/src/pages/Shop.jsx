import React, {useContext, useEffect} from 'react'
import {Col, Container, Row} from "react-bootstrap"
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(r => device.setTypes(r))
        fetchBrands().then(r => device.setBrands(r))
        fetchDevices(null, null, 1, 2).then(r => {
            device.setDevices(r.rows)
            device.setTotalCount(r.count)
        })
    })

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(r => {
            device.setDevices(r.rows)
            device.setTotalCount(r.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand])

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop