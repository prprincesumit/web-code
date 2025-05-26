import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { javascript } from "@codemirror/lang-javascript";
import { less } from "@codemirror/lang-less";
import { useState } from "react";
import './scroll-style.css';

const Container = styled(Box)`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
    border-radius: 100px;
`

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    font-size: 12px;
    padding: 9px 12px;
    align-self: center;
`;
const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #aaaebc;
    justify-content: space-between;
    align-item: center;
    font-weight: 700;
`

const Editor = ({heading, color, icon, value, onChange}) => {
    const handleChange = (value) => {
        onChange(value);
    }
    return <>
        <Container>
            <Header>
                <Heading>
                    <Box component="span" style={{alignSelf: "center", background: color, color: "white", height: 15, width: 15, fontSize: 12, display: "flex", placeContent: "center", borderRadius: 5, marginRight: 5, paddingBottom: 2}}>{icon}</Box>{heading}
                </Heading>
            </Header>
            {
                heading==="HTML" ? <CodeMirror value={value} onChange={handleChange} height="40vh" theme={"dark"} extensions={[html({ jsx: true })]} style={{fontSize: 12}} />:<></>
            }
            {
                heading==="CSS" ? <CodeMirror value={value} onChange={handleChange} height="40vh" theme={"dark"} extensions={[less({ jsx: true })]} style={{fontSize: 12}} />:<></>
            }
            {
                heading==="JavaScript" ? <CodeMirror value={value} onChange={handleChange} height="40vh" theme={"dark"} extensions={[javascript({ jsx: true })]} style={{fontSize: 12}} />:<></>
            }
        </Container>
    </>;
}

export default Editor;