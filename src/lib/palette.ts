import {} from "@mui/material"

declare module "@mui/material/styles" {
    interface FontStyleOptions {
        body2italic: any;
        body1medium: any;
    }

    interface TypeAction {
        actionHover: string;
    }
}
