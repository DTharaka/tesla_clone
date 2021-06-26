import React from 'react'

import styled from 'styled-components';

import Section from './Section';

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-s.jpg"
                leftButtonText="CUSTOM ORDER"
                rightButtonText="EXISTING INVENTORY"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-y.jpg"
                leftButtonText="CUSTOM ORDER"
                rightButtonText="EXISTING INVENTORY"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-3.jpg"
                leftButtonText="CUSTOM ORDER"
                rightButtonText="EXISTING INVENTORY"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-x.jpg"
                leftButtonText="CUSTOM ORDER"
                rightButtonText="EXISTING INVENTORY"
            />
            <Section 
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImage="solar-panel.jpg"
                leftButtonText="ORDER NOW"
                rightButtonText="LEARN MORE"
            />
            <Section 
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImage="solar-roof.jpg"
                leftButtonText="ORDER NOW"
                rightButtonText="LEARN MORE"
            />
            <Section 
                title="Accessories"
                description=""
                backgroundImage="accessories.jpg"
                leftButtonText="SHOP NOW"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
