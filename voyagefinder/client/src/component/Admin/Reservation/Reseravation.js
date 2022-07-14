import { Paper, Typography } from "@mui/material";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import {
  ColumnDirective,
  ColumnsDirective, ContextMenu, Edit, Filter,
  GridComponent,
  Inject,
  Page, Selection, Sort, Toolbar
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { reservationGrid } from './Grid';
import useStyles from "./style";


const Reservation = () => {
  const baseUrl = process.env.REACT_APP_BASE_lOCAL;
  const storeUser = JSON.parse(localStorage.getItem("profile"));
  const data = new DataManager({
    adaptor: new UrlAdaptor(),
    headers : [{Authorization : `Bearer ${storeUser.token}`}],
    url: baseUrl + "/posts/getreservation",
    removeUrl: baseUrl + "/posts/deletereservation",
    updateUrl: baseUrl + "/posts/updatereservation",

  });
  const classes = useStyles();
  return (
    <>
      <Paper elevation={4} className={classes.paper}>
        <Typography className={classes.title} variant="h4" align="center">
          Reservation
        </Typography>
        <GridComponent
          id="gridcomp"
          dataSource={data}
          allowPaging
          allowSorting
          toolbar={["Delete", "Edit",  "Update"]}
          editSettings={{ allowDeleting: true, allowEditing:true, allowUpdating:true }}
          width="auto"
        >
          <ColumnsDirective>
            {reservationGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Selection, Sort, Filter, Page, Edit, Toolbar, ContextMenu]} />
        </GridComponent>
      </Paper>
    </>
  );
};

export default Reservation;
