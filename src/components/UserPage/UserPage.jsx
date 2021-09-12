import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TableRow, TableHead, Table, Button, makeStyles } from "@material-ui/core";
import { Paper, TableBody, TableCell, TableSortLabel } from '@material-ui/core';
//import { DataGridPro } from '@mui/x-data-grid-pro';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const ratings = useSelector((store) => store.ratingsReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const [editUsername, setEditUsername] = useState('');
  const [buttonClick, setButtonClick] = useState(true);


  useEffect(() => {
    dispatch({
      type: 'FETCH_RATINGS'
    })
  }, [])

  const beerCount = ratings.length
  //const beerCount = 100
  console.log('****************', beerCount)


  const useStyles = makeStyles(theme => ({
    table: {
      marginTop: theme.spacing(3),
      '& tr': {
        fontWeight: '600',
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.success.light,
      },
      '& td': {
        fontWeight: '500',
      },
      '& tr:hover': {
        backgroundColor: '#fffbf2',
        cursor: 'pointer'
      }
    }
  }))
  const classes = useStyles();

  const handleEdit = (id) => {
    dispatch({
      type: 'EDIT',
      payload: id
    })
  }

  const beerCounter = () => {
    if (beerCount < 20) {
      console.log('Bronze')
      return <TableCell>Bronze</TableCell>
    } else if (beerCount < 50) {
      console.log('Silver')
      return <TableCell>Silver</TableCell>
    }
    else if (beerCount < 100) {
      console.log('Gold')
      return <TableCell>Gold</TableCell>
    }
    else {
      console.log('Platinum');
      return <TableCell>Platinum</TableCell>
    }
  }
  

  
  const toggleButtonClick = () => {
    setButtonClick(!buttonClick);
  }
  const toggleButton = () => {
    if (buttonClick) {
      return;
    }
    else {
      return (
        <div>
          <input 
            type="text"
            placeholder="edit username"
            value={editUsername}
            onChange={e => setEditUsername(e.target.value)}

          /> 
          <button onClick={() => handleEdit(editUsername)}>Submit Changes</button>
        </div>
      )
    }
  }


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>

      <Paper>
        <Table className={classes.table}>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>{user.username}</TableCell>       
          </TableRow>

          
          <TableRow>
            <TableCell>Breweries Visited:</TableCell>
            <TableCell>10 million</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Beers Rated:</TableCell>
            <TableCell>{beerCount}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Tier:</TableCell>
            {beerCounter()}
          </TableRow>
        </Table>
      </Paper>

      <Button
        variant="contained"
        onClick={toggleButtonClick}
        //color="secondary"
      >
        Edit User Data
      </Button>

      {toggleButton()}

      {/* <DataGridPro
        columns={[
          { field: 'id' },
          { field: 'username', minWidth: 150 },
          { field: 'age', resizable: false },
        ]}
        rows={rows}
      /> */}




      {/* <table>
        <th>
          
          <tr>Username:</tr>
          
          <tr>Breweries Visited:</tr>
          <tr>Beers Rated:</tr>
          <tr>Tier:</tr>
        </th>

        <td>
          
          <tr>{user.username}</tr>
          
          <tr>2</tr>
          <tr>2</tr>
          <tr>Bronze</tr>
        </td>
        <td>
          <tr><button>Edit</button></tr>
        </td>
      </table> */}


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <h3>Progress Bar will go here</h3>
      <h4>Rate 18 more beers to reach the next Tier</h4>
      {/* <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
