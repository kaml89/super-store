import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#F3F4F6",
          ".MuiTableCell-root": {
            color: "#374151",
          },
          borderBottom: "none",
          "& .MuiTableCell-root": {
            borderBottom: "none",
            fontSize: "13px",
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          },
          "& .MuiTableCell-paddingCheckbox": {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
    // MuiDialogContent: {
    //   styleOverrides: {
    //     root: {
    //       margin: "10px",
    //     },
    //   },
    // },

    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiDialogTitle-root": {
    //         paddingTop: "20px",
    //         color: "red",
    //         fontSize: "4rem",
    //       },
    //     },
    //   },
    // },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingTop: "20px",
          "& .MuiDialogContent-root": {
            paddingTop: "30px",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          ".MuiFormControl-root": {
            minWidth: "100%",
          },
        },
      },
    },
  },
});
