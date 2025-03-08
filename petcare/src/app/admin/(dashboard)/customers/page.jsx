'use client'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react"
import EditIcon from '@mui/icons-material/Edit';


const Page = () => {

    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [customerData, setCustomerData] = useState([]);

    const payload = {
        "page_size": pageSize,
        "current_page": currentPage
    }


    useEffect(() => {
        const storeCustomer = async () => {
            try {
                const response = await axios.post("http://127.0.0.1:8000/getallcustomer/", payload);
                console.log("✅ Customer saved successfully:", response.data);
                setCustomerData(response.data);
            } catch (error) {
                console.error("❌ Error saving customer:", error.response ? error.response.data : error.message);
            }
        }
        storeCustomer();
    }, [pageSize]);

    if (customerData.length === 0)
        return;

    return (
        <div>

            <h2 className="text-center mt-10">Customer List</h2>
            <div className="text-center justify-center">
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120, textAlign: 'center' }}>
                    <InputLabel id="demo-simple-select-filled-label">Page Size</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={pageSize}
                        onChange={(event) => setPageSize(event.target.value)}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerData.data.map((data) => (
                            <tr key={data.cid}>
                                <td>{data.cid}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.address}</td>
                                <td>{data.phone}</td>
                                <td><EditIcon /></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </div>
    )

}

export default Page;