import { alpha, AppBar, Toolbar, styled, Box } from "@mui/material";
import { pink, blue, yellow } from '@mui/material/colors';
import logo from '../images/logo.png';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { DataContext } from "../context/DataProvider";
import { useContext } from "react";

const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));
const BlueSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: blue[600],
      '&:hover': {
        backgroundColor: alpha(blue[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: blue[600],
    },
  }));
const YellowSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: yellow[600],
      '&:hover': {
        backgroundColor: alpha(yellow[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: yellow[600],
    },
  }));

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`
const Bar = styled(Toolbar)`
    justify-content: space-between;
`
const Btn = styled(Button)`
    font-weight: 500
`

const Header = () => {
    const {html, setHtml, css, setCss, js, setJs, setFirst, setSecond, setThird} = useContext(DataContext);
    const reset = () => {
        setHtml(""); setCss(""); setJs("");
    }
    const save = () => {
        if(html==="" && css==="" && js==="") return;
        const temp = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>${css}</style>
</head>
<body>
    ${html}
    <script>
        ${js}
    </script>
</body>
</html>`
        const blob = new Blob([temp], {type: "text/html"});
        const fileUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "index";
        link.href = fileUrl;
        link.click();
    }
    const firstContainer = () => setFirst(prev=>!prev);
    const secondContainer = () => setSecond(prev=>!prev);
    const thirdContainer = () => setThird(prev=>!prev);
    return <><Container position="static">
        <Bar>
            <img src={logo} alt="logo" style={{width: "100px", marginBottom: "10px"}} />
            <Box>
                <FormControlLabel style={{fontWeight: 500, color: "#aaaebc"}} control={<PinkSwitch onClick={firstContainer} color="primary" size="small" defaultChecked />} label="HTML" />
                <FormControlLabel style={{fontWeight: 500, color: "#aaaebc"}} control={<BlueSwitch onClick={secondContainer} color="default" size="small" defaultChecked />} label="CSS" />
                <FormControlLabel style={{fontWeight: 500, color: "#aaaebc"}} control={<YellowSwitch onClick={thirdContainer} color="default" size="small" defaultChecked />} label="JS" />
                <Btn id="reset-btn" onClick={reset} size="small" color="secondary" variant="contained" style={{marginRight: "20px"}}>Reset</Btn>
                <Btn id="save-btn" onClick={save} size="small" color="success" variant="contained">Save</Btn>
            </Box>
        </Bar>
    </Container>
    </>;
}

export default Header;