'use client'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react"
import EditIcon from '@mui/icons-material/Edit';


const Page = () => {

    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setSellerPage] = useState(1);
    const [sellerData, setSellerData] = useState([]);

    const payload = {
        "page_size": pageSize,
        "current_page": currentPage
    }


    useEffect(() => {
        const storeSeller = async () => {
            try {
                const response = await axios.post("http://127.0.0.1:8000/getallseller/", payload);
                console.log("✅ Seller saved successfully:", response.data);
                setSellerData(response.data);
            } catch (error) {
                console.error("❌ Error saving seller:", error.response ? error.response.data : error.message);
            }
        }
        storeSeller();
    }, [pageSize]);

    if (sellerData.length === 0)
        return;

    return (
        <div>

            <h2 className="text-center mt-10">Seller List</h2>
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
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellerData.data.map((data) => (
                            <tr key={data.sid}>
                                <td>{data.sid}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>
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