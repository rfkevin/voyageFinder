import React from "react";
import { usersGrid } from "./Grid";
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Inject,
  Page,
  Sort,
  Edit,
  Toolbar,
  Selection,
} from "@syncfusion/ej2-react-grids";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";

import useStyles from "./style";
import { Paper, Typography } from "@mui/material";

const Users = () => {
  const baseUrl = process.env.REACT_APP_BASE_lOCAL;
  const storeUser = JSON.parse(localStorage.getItem("profile"));
  const data = new DataManager({
    adaptor: new UrlAdaptor(),
    headers : [{Authorization : `Bearer ${storeUser.token}`}],
    url: baseUrl + "/user/getUserList",
    removeUrl: baseUrl + "/user/deleteUser",
  });
  const classes = useStyles();
  return (
    <>
      <Paper elevation={4} className={classes.paper}>
        <Typography className={classes.title} variant="h4" align="center">
          Users
        </Typography>
        <GridComponent
          id="gridcomp"
          dataSource={data}
          allowPaging
          allowSorting
          toolbar={["Delete"]}
          editSettings={{ allowDeleting: true }}
          width="auto"
        >
          <ColumnsDirective>
            {usersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Selection, Sort, Filter, Page, Edit, Toolbar]} />
        </GridComponent>
      </Paper>
    </>
  );
};

export default Users;
