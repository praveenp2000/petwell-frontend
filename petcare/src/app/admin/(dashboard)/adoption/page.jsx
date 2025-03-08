'use client'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react"
import EditIcon from '@mui/icons-material/Edit';


const Page = () => {

    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setAdoptionPage] = useState(1);
    const [adoptionData, setAdoptionData] = useState([]);

    const payload = {
        "page_size": pageSize,
        "current_page": currentPage
    }


    useEffect(() => {
        const storeAdoption = async () => {
            try {
                const response = await axios.post("http://127.0.0.1:8000/getalladoption/", payload);
                console.log("✅ Customer saved successfully:", response.data);
                setAdoptionData(response.data);
            } catch (error) {
                console.error("❌ Error saving adoption:", error.response ? error.response.data : error.message);
            }
        }
        storeAdoption();
    }, [pageSize]);

    if (adoptionData.length === 0)
        return;

    return (
        <div>

            <h2 className="text-center mt-10">Adoption List</h2>
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
                            <th>Breed</th>
                            <th>Animal</th>
                            <th>Color</th>
                            <th>Age</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adoptionData.data.map((data) => (
                            <tr key={data.aid}>
                                <td>{data.aid}</td>
                                <td>{data.breed}</td>
                                <td>{data.animal}</td>
                                <td>{data.color}</td>
                                <td>{data.age}</td>
                                <td>{data.description}</td>
                                <td>{data.image}</td>
                                <td>{data.gender}</td>
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