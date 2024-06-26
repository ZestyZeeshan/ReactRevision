import React,{ useState } from "react";

function Onchange(){

    const[name,Setname] = useState('guest')

    const[quantity,Setquantity] = useState();

    const[comment, Setcomment] = useState("")

    const[payment, Setpayment] = useState("")

    const[Shipping, SetShipping] = useState("")

    function update(event){
        Setname(event.target.value)
    }

    function newquant(event){
        Setquantity(event.target.value)
    }

    function handlecomment(event){
        Setcomment(event.target.value)
    }

    function handlePayment(event){
        Setpayment(event.target.value)
    }

    function handleShipping(event){
        SetShipping(event.target.value)
    }
    return(
        <div>
           <p>Name : {name}</p>
           <input value={name} onChange={update} />

           <p>Quantity : {quantity}</p>
           <input value={quantity} onChange={newquant} type="number"/>
           
           <textarea value={comment} onChange={handlecomment}
           placeholder = "enter direction" />
           <p>Instruction : {comment}</p>

           <select value={payment} onChange={handlePayment}>
            <option value="">Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="GiftCard">giftCard</option>

           </select>
           <p>Payment: {payment}</p>

           <label>
            <input type="radio" value="Pick-up"
            checked = {Shipping === "Pick-up"}
            onChange={handleShipping}/>pick up
           </label>
           <br/>
          
           <label>
            <input type="radio" value="deliver"
            checked = {Shipping === "deliver"}
            onChange={handleShipping}/>deliver
           </label>
           <p>Shipping : {Shipping}</p>
          
        </div>

        
    )
}
export default Onchange;