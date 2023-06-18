import {useEffect,useState} from 'react';
import Axios from 'axios';

function Component1(){
   const [data,setData]=useState([]);
   useEffect(()=>{
    Axios.get('https://dummyjson.com/users')
    .then((res)=>{
        if(res.status===200){
           setData(res.data.users);
        }
        else{
            Promise.reject();
        }
    })
    .catch((err)=>{
        alert(err);
    })
   },[])
    return(
        <div>
        
       <table cellspacing={"0px"} border={"1px"} cellPadding={"3px"}>
         <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>UserName</th>
            <th>Birthdate</th>
            <th>Image</th>
            <th>Height</th>
            <th>Weight</th>
            <th>City</th>
            <th>Lattitude</th>
            <th>Longitude</th>
            <th>Card Expiry Date</th>
            <th>Company Name</th>
         </tr>
        {data.map((dataObj, index) => {
          return (
            <tr>
              <td>{dataObj.firstName}</td>
              <td>{dataObj.lastName}</td>
              <td>{dataObj.age}</td>
              <td>{dataObj.gender}</td>
              <td>{dataObj.email}</td>
              <td>{dataObj.phone}</td>
              <td>{dataObj.username}</td>
              <td>{dataObj.birthDate}</td>
              <td>{dataObj.image}</td>
              <td>{dataObj.height}</td>
              <td>{dataObj.weight}</td>
              <td>{dataObj.address.city}</td>
              <td>{dataObj.address.coordinates.lat}</td>
              <td>{dataObj.address.coordinates.lng}</td>
              <td>{dataObj.bank.cardExpire}</td>
              <td>{dataObj.company.name}</td>



            </tr>
          );
        })}
       </table>
       </div>
  )
}

export default Component1;