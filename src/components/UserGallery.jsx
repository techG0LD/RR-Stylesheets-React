import UserCard from './UserCard/UserCard'

export default function UserGallery () {

    const galleryStyle = {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap:'wrap',
        alignItems: "center",
        padding: "25px 0px 0px 0px"
    }

    return(
        <div style={galleryStyle}>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
        </div>
    )
}