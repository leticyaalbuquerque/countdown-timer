import { useState } from "react";

export default function useFormData(e) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    setTitle(e.target.value)
    setDate(e.target.value)

    return [title, date]
}