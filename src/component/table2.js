import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import '../App.css';

class Table2 extends Component{
  render()
  {
    const paperStyle={
      height:'1220',
      width:'1800',
      overflow: 'auto',
      color:'red',
     
    }
    
   
  return (
    
     <div className="tab">
        <Paper style={paperStyle}>
      
          <Typography variant="" component="h1" align="center">
                    VANSOFT
                      </Typography>
           
     <Table>
        <TableHead>
          <TableRow>
           
            <TableCell>Slno</TableCell>
            <TableCell>Monday</TableCell>
            <TableCell>Tuesday</TableCell>
            <TableCell>Wednesday</TableCell>
            <TableCell>Thursday</TableCell>
            <TableCell>Friday</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow>
              
              <TableCell align="right">1</TableCell>
              <TableCell align="right">Jithin</TableCell>
              <TableCell align="right">Jibin</TableCell>
              <TableCell align="right">Mushtaque</TableCell>
              <TableCell align="right">Athulya</TableCell>
              <TableCell align="right">Anagha</TableCell>
            </TableRow>
            <TableRow>
              
              <TableCell align="right">2</TableCell>
              <TableCell align="right">Jibin</TableCell>
              <TableCell align="right">Jithin</TableCell>
              <TableCell align="right">Anagha</TableCell>
              <TableCell align="right">Mushtaque</TableCell>
              <TableCell align="right">Athulya</TableCell>
            </TableRow>
            <TableRow>
              
              <TableCell align="right">3</TableCell>
              <TableCell align="right">Athulya</TableCell>
              <TableCell align="right">Mushtaque</TableCell>
              <TableCell align="right">Jithin</TableCell>
              <TableCell align="right">Anagha</TableCell>
              <TableCell align="right">Jibin</TableCell>
            </TableRow>
            <TableRow>
              
              <TableCell align="right">4</TableCell>
              <TableCell align="right">Mushtaque</TableCell>
              <TableCell align="right">Jibin</TableCell>
              <TableCell align="right">Jithin</TableCell>
              <TableCell align="right">Athulya</TableCell>
              <TableCell align="right">Anagha</TableCell>
            </TableRow>
            <TableRow>
              
              <TableCell align="right">5</TableCell>
              <TableCell align="right">Anagha</TableCell>
              <TableCell align="right">Athulya</TableCell>
              <TableCell align="right">Mushtaque</TableCell>
              <TableCell align="right">Jithin</TableCell>
              <TableCell align="right">Jibin</TableCell>
            </TableRow>
          
        </TableBody>
        </Table>
  
   
      
    </Paper>
    </div>
  );
}
}
export default Table2
