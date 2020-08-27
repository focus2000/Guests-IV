import React, {useContext} from 'react';
import GuestContext from '../../context/guestContext/guestContext';
import guestCouter from '../../css/guestCouter.css'

const GuestCounter = () => {
    const {guests} = useContext(GuestContext)
    const totalInvited = guests.length
    const attending = guests.filter(guest => guest.isconfirmed)
    const totalAttending = attending.length
    const invitedBySpecial = (type) => guests.filter(guest => guest.specialty === type).length
    const attendingBySpecial = (type) => attending.filter(guest => guest.specialty === type).length

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Guest</th>
                        <th>Invited</th>
                        <th>Attending</th>
                    </tr>
                    <tr>
                        <th>Backend Developer</th>
                        <td>{invitedBySpecial('Backend Developer')}</td>
                        <td>{attendingBySpecial('Backend Developer')}</td>
                    </tr>
                    <tr>
                        <th>Frontend Developer</th>
                        <td>{invitedBySpecial('Frontend Developer')}</td>
                        <td>{attendingBySpecial('Frontend Developer')}</td>
                    </tr>
                    <tr>
                        <th>UX Designer</th>
                        <td>{invitedBySpecial('UX Designer')}</td>
                        <td>{attendingBySpecial('UX Designer')}</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>{totalInvited}</td>
                        <td>{totalAttending}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GuestCounter
