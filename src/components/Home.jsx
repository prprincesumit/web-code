import Code from "./Code";
import Header from "./Header";
import Result from "./Result";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Home(){
    const hide = () => {
        document.getElementById("editor").classList.toggle("hide");
    }
    return <>
        <div id="editor">
            <Header />
            <Code />
        </div>
        <Result />
        <div onClick={hide} className="hide-btn"><KeyboardArrowUpIcon id="up-down-btn" /></div>
    </>;
}

export default Home;