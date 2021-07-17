import React, {useContext} from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className='d-flex'>
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    className='p-2 m-1'
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    onClick={() => device.setSelectedBrand(brand)}
                    style={{cursor: 'pointer'}}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    )
})

export default BrandBar