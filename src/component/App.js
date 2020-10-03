import React, { Component } from 'react';

import './css/App.css';
import PanelGroup from 'react-panelgroup';
import styled from 'styled-components';
import SidePanel from './SidePanel';
import MainPanel from './MainPanel';

const Container = styled.div`
    height: 100vh;
`;

const panelConfig = [
    { size: 270, minSize: 0, maxSize: 270, resize: "dynamic" },
    { resize: "stretch"}
]

class App extends Component {

    render() {
        return (
            <Container>
                <div className="header">
                    <h1>Nav Bar Here</h1>
                </div>

                <div className="main">
                    <PanelGroup panelWidths={panelConfig} borderColor="#EEEEEE" spacing={5}>
                        <SidePanel />
                        <MainPanel />
                    </PanelGroup>
                </div>
            </Container>
        );
    }
}

export default App;