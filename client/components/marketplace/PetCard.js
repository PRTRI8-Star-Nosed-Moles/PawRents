import React from "react";


// export const PetCard = (props) => {
//     return (
//         <div className="card">
//             <div className="c-inside">
//             <div className="c-front">
//                 <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*' />
//             </div>
//             <div className="c-back">
//                 <h5>Dog Name</h5>
//                 <ul>
//                     <li>Bio: </li>
//                     <li>Age: </li>
//                     <li>Breed: </li>
//                     <li>Weight: </li>
//                     <li>Price: </li>
//                     <button>Rent Me!</button>
//                 </ul>
//             </div>
//             </div>
//         </div>
//     )
// }

export const PetCard = (props) => {
    const {item} = props;
    const username = sessionStorage.getItem("username");

    const addReservation = async (e) => {
        e.preventDefault()
        const date = e.target[0].value

        const data = {
            date: date,
            pet_id: item._id,
            username: username,
        }
//this response doesn't work, 504 error
console.log(data)
        try{
         const response = await fetch('/api/reservation', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
         });
        } catch (err){
            console.log(err)
        }
    }
    
    
    return (
        <div className="card">
            <div className="c-inside">
            <div className="c-front">
                <img src={item.image_url} />
            </div>
            <div className="c-back">
                <h5>{item.name}</h5>
                <ul>
                    <li>Bio: {item.bio}</li>
                    <li>Age: {item.age}</li>
                    <li>Breed: {item.breed}</li>
                    <li>Weight: {item.weight}</li>
                    <li>Price: {item.price}</li>
                
                </ul>
                <form onSubmit = {addReservation}>
                  <label>
                    <input type="date" name="date"/>
                  </label>
                  <input type="submit" value="Rent Me!"/>
                </form>
            </div>
            </div>
        </div>
    )
    }