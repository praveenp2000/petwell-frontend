'use client'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react"
import EditIcon from '@mui/icons-material/Edit';


const Page = () => {

    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setProductPage] = useState(1);
    const [productData, setProductData] = useState([]);

    const payload = {
        "page_size": pageSize,
        "current_page": currentPage
    }


    useEffect(() => {
        const storeProduct = async () => {
            try {
                const response = await axios.post("http://127.0.0.1:8000/getallproduct/", payload);
                console.log("✅ Product saved successfully:", response.data);
                setProductData(response.data);
            } catch (error) {
                console.error("❌ Error saving product:", error.response ? error.response.data : error.message);
            }
        }
        storeProduct();
    }, [pageSize]);

    if (productData.length === 0)
        return;

    return (
        <div>

            <h2 className="text-center mt-10">Product List</h2>
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
                            <th>ProductId</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Animal</th>
                            <th>Producttype</th>
                            <th>Rating</th>
                            <th>Aproved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productData.data.map((data) => (
                            <tr key={data.productid}>
                                <td>{data.productid}</td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.quantity}</td>
                                <td>{data.animal}</td>
                                <td>{data.producttype}</td>
                                <td>{data.rating}</td>
                                <td>{data.aproved}</td>
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