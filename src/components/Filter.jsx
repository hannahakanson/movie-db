import { Button } from 'react-bootstrap'

function Filter( { genres }) {
    return (
        <div>
            {genres && genres.map(genre => {
                return <Button key={genre.id} className="m-2" variant="outline-light">{genre.name}</Button>
            })}
        </div>
    )
}

export default Filter