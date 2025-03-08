'use client'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react"
import EditIcon from '@mui/icons-material/Edit';


const Page = () => {

    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setBookingPage] = useState(1);
    const [bookingData, setBookingData] = useState([]);

    const payload = {
        "page_size": pageSize,
        "current_page": currentPage
    }


    useEffect(() => {
        const storeBooking = async () => {
            try {
                const response = await axios.post("http://127.0.0.1:8000/getallbooking/", payload);
                console.log("✅ Booking saved successfully:", response.data);
                setBookingData(response.data);
            } catch (error) {
                console.error("❌ Error saving adoption:", error.response ? error.response.data : error.message);
            }
        }
        storeBooking();
    }, [pageSize]);

    if (bookingData.length === 0)
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
                            <th>Slot</th>
                            <th>Date</th>
                            <th>Booking_type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingData.data.map((data) => (
                            <tr key={data.bid}>
                                <td>{data.bid}</td>
                                <td>{data.slot}</td>
                                <td>{data.date}</td>
                                <td>{data.booking_type}</td>
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