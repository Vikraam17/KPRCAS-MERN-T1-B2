const Child = (props) => {
  return (
    <div>
        <h1>Name : {props.name}</h1>
        <p>Age : {props.age}</p>
        <p>Active : {props.isActive?"Online":"Offline"}</p>
        {props.mark.map((val,index)=>(
          <p key={index}>Mark {index+1} : {val}</p>
        ))}
        <h4>Address</h4>
        <p>Email : {props.address.email}</p>
        <p>Mobile No : {props.address.mobile}</p>
        <p>Pincode : {props.address.pincode}</p>
    </div>
  )
}

export default Child