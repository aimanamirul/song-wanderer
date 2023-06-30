import '../Styles/companion.css'

function Lists(props) {
    const albumList = props.albums.map((album, i) => {
        return (
        <li key={album.id} >
           <a href="#">{album.name}</a> 
        </li>)
    })

    return(
        <section className='companion'>
            <h3>List of Albums</h3>

            <ul>
                {albumList}
            </ul>
        </section>
    );
}

export default Lists