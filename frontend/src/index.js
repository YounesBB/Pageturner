import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { FluentProvider, teamsLightTheme, webDarkTheme, webLightTheme } from "@fluentui/react-components"
import { mergeStyles } from "@fluentui/react"

import { App } from "./App"

// Inject some global styles
mergeStyles({
    ":global(body,html,#root)": {
        margin: 10,
        // backgroundColor: "blue",
        padding: 0,
        height: "100vh",
    },
})

ReactDOM.render(
    <BrowserRouter>
        <FluentProvider theme={webLightTheme}>
            <App/>
        </FluentProvider>
    </BrowserRouter>,
    document.getElementById("root"),
)
