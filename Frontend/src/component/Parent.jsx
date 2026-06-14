import Child from "./Child"

const Parent = () =>{
    return(
        <div>
            <Child name="Vikraam"
            age={25}
            isActive={true}
            mark={[99,98,97,96,95]}
            address={{
                pincode:654321,
                email:"vikraam17@gmail.com",
                mobile:9876543210
            }} />
            <Child name="Vinothan"
            age={25}
            isActive={true}
            mark={[99,98,97,96,95]}
            address={{
                pincode:654321,
                email:"vikraam17@gmail.com",
                mobile:9876543210
            }} />
        </div>
    )
}
export default Parent