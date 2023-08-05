export default function SearchBar () {

    const searchBarStyle = {
        width:'30%',
        height:"40px",
        borderRadius: "50px",
        border: "2px solid black",
        padding: "0px 15px"
    }
    return(
        <div>
            <input style={searchBarStyle} type="text" placeholder="Search for users"></input>
        </div>
    )
}