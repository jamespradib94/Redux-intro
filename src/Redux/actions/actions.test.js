import axios from "axios"
import * as actions from "./actions"
jest.mock("axios");

test ("when api call is successful",async()=>{
    const response = { data: { abc: "ABC" }, status: 200 };
    axios.get.mockResolvedValue(response);
    const data={data:"asdfg"}
    const result = await actions.getDataAction(data);
    expect(result).toEqual(response.data);
  });
