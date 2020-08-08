import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)
    return [values, ({ target: tg }) => {
        setValues({ ...values, [tg.name]: tg.value })
    }, () => {
        setValues(initialState);
    }];
}
