import './UserCard.css'

export default function UserCard () {

    return(
        <div className="card">
            <img src="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png" alt="Profile" style={{width:'250px',borderRadius:"50%"}}/>
            <p className="user-bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro laudantium culpa voluptates, inventore earum aperiam suscipit aut iste vitae? Mollitia itaque non sit exercitationem cupiditate, delectus nisi veniam eius.
            </p>
        </div>
        
    )
}