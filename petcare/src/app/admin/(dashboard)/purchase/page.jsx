'use client'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react"
import EditIcon from '@mui/icons-material/Edit';


const Page = () => {

    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setPurchasePage] = useState(1);
    const [purchaseData, setPurchaseData] = useState([]);

    const payload = {
        "page_size": pageSize,
        "current_page": currentPage
    }


    useEffect(() => {
        const storePurchase = async () => {
            try {
                const response = await axios.post("http://127.0.0.1:8000/getallpurchase/", payload);
                console.log("✅ Purchase saved successfully:", response.data);
                setPurchaseData(response.data);
            } catch (error) {
                console.error("❌ Error saving purchase:", error.response ? error.response.data : error.message);
            }
        }
        storePurchase();
    }, [pageSize]);

    if (purchaseData.length === 0)
        return;

    return (
        <div>

            <h2 className="text-center mt-10">Purchase List</h2>
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
                            <th>PurchaseId</th>
                            <th>Date</th>
                            <th>Paid</th>
                            <th>Delivery_status</th>
                            <th>Product_id</th>
                            <th>Customer_id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseData.data.map((data) => (
                            <tr key={data.purchaseid}>
                                <td>{data.purchaseid}</td>
                                <td>{data.date}</td>
                                <td>{data.paid}</td>
                                <td>{data.delivery_status}</td>
                                <td>{data.product_id}</td>
                                <td>{data.customer_id}</td>
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