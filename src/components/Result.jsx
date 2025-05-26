import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled(Box)`
    height: calc(100vh - 57vh + 2px);
    margin-bottom: 0;
    width: 100%;
`

const Result = () => {
    const [src, setSrc] = useState("");
    const {html, css, js} = useContext(DataContext);
    const srcCode = `
        <html class="ignore">
            <head>
                <title>This Code is Written in Web-Code-Editor</title>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
        </html>
    `;
    useEffect(()=>{
        let timeout=setTimeout(() => {
            setSrc(srcCode);
        }, 1000);
        return ()=>clearTimeout(timeout);
    },[html, css, js, srcCode]);
    return (
        <Container className="result">
            <iframe 
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                frameBorder={0}
                width="100%"
                height="100%"
            />
        </Container>
    );
}
export default Result;