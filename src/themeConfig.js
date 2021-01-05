import { createMuiTheme } from "@material-ui/core";


const theme = createMuiTheme({
    "palette":{
            "common":{"black":"#000","white":"#fff"},
            "background":{"paper":"rgba(255, 255, 255, 1)","default":"#fafafa"},
            "primary":{"light":"rgba(255, 255, 86, 1)","main":"rgba(255, 234, 0, 1)","dark":"rgba(199, 184, 0, 1)","contrastText":"rgba(66, 66, 66, 1)"},
            "secondary":{"light":"rgba(255, 243, 80, 1)","main":"rgba(255, 193, 7, 1)","dark":"rgba(199, 145, 0, 1)","contrastText":"rgba(66, 66, 66, 1)"},
            "error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}
        }
        });

export default theme;