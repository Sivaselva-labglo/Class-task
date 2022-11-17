import {
  Button,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField
} from "@mui/material";
import React, { useState } from "react";
import { useRef } from "react";

const Formref = () => {
  const [change, setChange] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  const fieldRef = useRef({});
  const [store, setStore] = useState([]);

  const handleChange = (e) => {
    setChange({ ...change, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault()
    if (change.name === undefined || change.name === "") {
      fieldRef.current.name.focus();
      console.log("Click", change);
    } 
    else if (change.email === undefined || change.email === "") {
      fieldRef.current.email.focus();
    }
     else if (change.password === undefined || change.password === "") {
      fieldRef.current.password.focus();
    } 
    else if (
      change.name !== undefined && change.email !== undefined && change.password !== undefined
    ) {
      setStore([...store, change]);
      
      e.target.reset(setChange({
        name: "",
        email: "",
        password: ""
      }));
      console.log("data", store);
    }
  };

  return (
    <div>
        <form onSubmit={handleClick}>
        <FormControl >
      <TextField
        name="name"
        type="text"
        inputRef={(ref) => (fieldRef.current.name = ref)}
        onChange={handleChange}
      /> <br /> <br />
      <TextField
        name="email"
        type="email"
        inputRef={(ref) => (fieldRef.current.email = ref)}
        onChange={handleChange}
      /> <br /> <br />
      <TextField
        name="password"
        type="password"
        inputRef={(ref) => (fieldRef.current.password = ref)}
        onChange={handleChange}
      /> <br /> <br />
      <Button variant="contained" type="submit">
        Submit
      </Button>
      </FormControl>
      </form>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>PASSWORD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.map((ele) => {
            return (
              <TableRow key={ele.name}>
                <TableCell>{ele.name}</TableCell>
                <TableCell>{ele.email}</TableCell>
                <TableCell>{ele.password}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      
    </div>
  );
};
export default Formref;

