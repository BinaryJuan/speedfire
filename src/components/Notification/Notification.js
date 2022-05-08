import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const notifyAdd = (des) => toast.success(`Added "${des}" to cart successfully!`, {
    position: "bottom-left",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
})

export const notifyStock = () => toast.error(`Out of stock`, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
})

export const notifyOrder = () => toast.success('Purchased!', {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
})

export default notifyAdd