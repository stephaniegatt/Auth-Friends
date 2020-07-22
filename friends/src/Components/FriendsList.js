import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";


function FriendsList() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axiosWithAuth().get("http://localhost:5000/api/friends").then(res => {
            console.log("res", res.data);
            setFriends(res.data)
        })
    }, []) 
    const { handleSubmit, register } = useForm();
    const onSubmit = values => postFriends(values);
    const postFriends = values => {
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", {
                id: values.id,
                name: values.name,
                age: values.age,
                email: values.email,
          })
          .then(res => {
                console.log("then", res.data)
                setFriends(res.data)
          })
          .catch(err => console.log(err));
      };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="name"
                    ref={register({
                        required: "Required",
                    })}
                />
                <input
                    name="age"
                    ref={register({
                        required: "Required"
                    })}
                />
                <input
                    name="email"
                    ref={register({
                        required: "Required"
                    })}
                />
                <button type="submit">Add Friend</button>
            </form>
            <div>
                {friends.map(friend => {
                    return (
                        <div key={friend.email}>
                            <h2>{friend.name}</h2>
                            <h3>{friend.age}</h3>
                            <h3>{friend.email}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FriendsList;
