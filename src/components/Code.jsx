import Editor from "./Editor";
import { useContext, useState } from "react";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider";
import { pink, blue, yellow } from '@mui/material/colors';

const Container = styled(Box)`
    display: flex;
    background-color: #060606;
`

const Code = () => {
    const {html, setHtml, css, setCss, js, setJs, first, second, third} = useContext(DataContext);
    return (
        <>
        <Container>
            {first ? <Editor heading="HTML" color={pink[600]} icon="" value={html} onChange={setHtml} />:<></>}
            {second ? <Editor heading="CSS" color={blue[600]} icon="" value={css} onChange={setCss} />:<></>}
            {third ? <Editor heading="JavaScript" color={yellow[600]} icon="" value={js} onChange={setJs} />:<></>}
        </Container>
        </>
    );
}

export default Code;