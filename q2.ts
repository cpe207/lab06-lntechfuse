// const axios = require("axios");
import axios from "axios";
import {resourceUsage} from "process";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try{
    const idResp = await axios.get("https://jsonplaceholder.typicode.com/todos/" + todoId);
    const dataId = await axios.get("https://jsonplaceholder.typicode.com/users/" + idResp.data.userId);

    return {
      owner: dataId.data.name,
      title: idResp.data.title,
      completed: idResp.data.completed
    };

  } catch(error) {
    return "INVALID TODO ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;