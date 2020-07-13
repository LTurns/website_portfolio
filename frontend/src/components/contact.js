// import React, { Component } from "react";
// import axios from 'axios';
// import Table from 'react-bootstrap/Table';


// export default class Contact extends Component {

//   constructor(props){
//     super(props)

//     this.state = {
//       tasks: []
//     };
//   }


//   componentDidMount(){
//     axios.get('http://localhost:4000/tasks/')
//     .then(res => {
//       this.setState({
//       tasks: res.data,
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// }

// DataTable() {
//   return this.state.tasks.map((res, i) => {
//     return <TaskTableRow obj={res} key={i} />;
//   });
// }


//   render() {
//     return (
//       <div className="table-wrapper">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.DataTable()}
//           </tbody>
//         </Table>
//       </div> );
//   }
// }

// //In the above code, we are making HTTP GET request using React Axios and Node/Express JS REST API. We are using React-Bootstrap table to show the Students data on the frontend.