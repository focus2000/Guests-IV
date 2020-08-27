import React, {useState, useContext, useEffect} from 'react';
import GuestContext from '../../context/guestContext/guestContext'
import guestForm from '../../css/guestForm.css'

const GuestForm = () => {
    const {addGuest, editAble, updateGuest, clearEdit} = useContext(GuestContext)
    useEffect(() => {
        if(editAble !== null) {
            setGuest(editAble)
        } else {
            setGuest({
                name: '',
                phone:'',
                specialty:'Backend Developer'
            })
        }
    }, [editAble])
    const [guest, setGuest] = useState({
        name: '',
        phone:'',
        specialty:'Backend Developer'
    })

    

    const {name, phone, specialty} = guest

    const handleChange = (e) => {
        setGuest({
            ...guest,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(editAble !==null) {
            updateGuest(guest)
            clearEdit()
        } else {
            addGuest(guest)
            setGuest({
                name: '',
                phone:'',
                specialty:'Backend Developer'
            })
        }
       
    }
    return (
        <div className="invite-section">
            <h1>{editAble !== null ? 'Edit Guest' :'Invite Someone'}</h1>
            <form onSubmit = {onSubmit}>
                <input type="text" placeholder="Name" name="name" value = {name} onChange = {handleChange}/>
                <input type="text" placeholder = "Phone" name="phone" value = {phone} onChange = {handleChange}/>
                <p className="options-label">Specialty</p>
                <div className="options">
                    <label className="container">Backend Developer
                    <input type="radio" name="specialty" value="Backend Developer" checked={specialty === 'Backend Developer'} onChange = {handleChange}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Frontend Developer
                    <input type="radio" name="specialty" value="Frontend Developer"checked={specialty === 'Frontend Developer'} onChange = {handleChange}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">UX Designer
                    <input type="radio" name="specialty" value="UX Designer"  checked={specialty === 'UX Designer'}onChange = {handleChange}/>
                    <span className="checkmark"></span> 
                    </label>
                </div>
                <input type="submit" value ={editAble !== null ? 'Update Guest' :'Add Guest'}className="btn"/>
                {editAble !== null ? <input onClick = {clearEdit} value = "Cancel"  type = "button" className = " btn clear"/> :null}
            </form>
        </div>
    )
}

export default GuestForm
