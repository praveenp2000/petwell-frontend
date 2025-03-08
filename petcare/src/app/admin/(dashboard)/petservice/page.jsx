'use client'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react"
import EditIcon from '@mui/icons-material/Edit';


const Page = () => {

    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setHealthPage] = useState(1);
    const [petserviceData, setHealthData] = useState([]);

    const payload = {
        "page_size": pageSize,
        "current_page": currentPage
    }


    useEffect(() => {
        const storeHealth = async () => {
            try {
                const response = await axios.post("http://127.0.0.1:8000/getallpetservice/", payload);
                console.log("✅ Health saved successfully:", response.data);
                setHealthData(response.data);
            } catch (error) {
                console.error("❌ Error saving health:", error.response ? error.response.data : error.message);
            }
        }
        storeHealth();
    }, [pageSize]);

    if (petserviceData.length === 0)
        return;

    return (
        <div>

            <h2 className="text-center mt-10">Health List</h2>
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
                            <th>Customer Id</th>
                            <th>Pet Id</th>
                            <th>Service Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {petserviceData.data.map((data) => (
                            <tr key={data.pserviceid}>
                                <td>{data.pserviceid}</td>
                                <td>{data.customer_id}</td>
                                <td>{data.pet_id}</td>
                                <td>{data.service_id}</td>
                                <td>{data.status}</td>
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