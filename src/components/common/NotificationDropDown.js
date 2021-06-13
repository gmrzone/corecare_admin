import BigDropDown from './BigDropDown'
const NotificationDropDown = () => {
    const fakeData = [
        {   
            id: 1,
            from: "Zaid Shaikh",
            msg: "send you a message",
            to: null

        },
        {   
            id: 2,
            from: "Arshad Shaikh",
            msg: "sent a partner request as ",
            to: "Cleaner"
        },
        {   
            id: 3,
            from: "John Smith",
            msg: "Created a new service",
            to: "Deep Cleaning"
        },
        {   
            id: 4,
            from: "Richard Miles",
            msg: "commented on your post",
            to: "7 Ways CCTVs Might Disappoint You"
        },
        {   
            id: 5,
            from: "Mike Litorus",
            msg: "Created a new service",
            to: "Door Repair"
        },
        {   
            id: 6,
            from: "Claire Mapes",
            msg: "sent a partner request as",
            to: "Electrician"
        },
        {   
            id: 7,
            from: "Jeffery Lalor",
            msg: "commented on your post",
            to: "10 Essential Washing Machine Maintenance Tips"
        },


    ]
    return (
        <BigDropDown iconClass="bell outline icon" type="Notification" data={fakeData}/>
    )
}

export default NotificationDropDown