import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { FC, MouseEvent, SetStateAction, useEffect, useState } from "react";
import { GetAllCompanys } from "../../redux/actionCreater";
import { connect } from "react-redux";

interface Column {
  id: string;
  name: string;
}

interface CompanyProps {
  companystate: {
    isloading: boolean;
    errormessage: string;
    companylist: {
      id: number;
      name: string;
      email: string;
      phone: string;
      Address: string;
      type: string;
    }[];
  };
  loadcompany: () => void;
}

const CompanyList: FC<CompanyProps> = (props) => {
  const columns: Column[] = [
    { id: "id", name: "Id" },
    { id: "name", name: "Name" },
    { id: "email", name: "Email" },
    { id: "phone", name: "Phone" },
    { id: "address", name: "Address" },
    { id: "type", name: "Company Type" },
    { id: "action", name: "Action" },
  ];

  const [rowperpage, rowperpagechange] = useState(5);
  const [page, pagechange] = useState(0);

  const handlepagechange = (
    event: MouseEvent<HTMLButtonElement> | null,
    newpage: SetStateAction<number>
  ) => {
    pagechange(newpage);
  };

  const handlerowperpagechange = (event: {
    target: { value: string | number };
  }) => {
    rowperpagechange(+event.target.value);
    pagechange(0);
  };

  // ============= Load data from redux
  useEffect(() => {
    props.loadcompany();
  }, []);
  return (
    <div style={{ margin: "1%" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "midnightblue" }}>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ color: "white" }}>
                  {column.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.companystate.companylist &&
              props.companystate.companylist
                .slice(page * rowperpage, page * rowperpage + rowperpage)
                .map((row, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.phone}</TableCell>
                      <TableCell>{row.Address}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="primary">
                          Edit
                        </Button>
                        <Button variant="contained" color="error">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[2, 5, 10, 20]}
        rowsPerPage={rowperpage}
        page={page}
        count={props.companystate.companylist.length}
        component={"div"}
        onPageChange={handlepagechange}
        onRowsPerPageChange={handlerowperpagechange}
      ></TablePagination>
    </div>
  );
};

const mapStatetoProps = (state: any) => {
  return {
    companystate: state.company,
  };
};

const mapDispatchtoProps = (dispatch: any) => {
  return {
    loadcompany: () => dispatch(GetAllCompanys()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(CompanyList);
