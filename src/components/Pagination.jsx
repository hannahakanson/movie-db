//Bootstrap components
import Pagination from 'react-bootstrap/Pagination'

const PaginationComponent = ( { page, turnPage }) => {

    return (
        <Pagination className="m-4">
                <Pagination.Prev onClick={() => {
                    turnPage({
                        page: Number(page) - 1,
                    })
                }}/>
                {page!=1 && <Pagination.Item onClick={() => {
                    turnPage({
                        page: Number(page) - 1,
                    })
                }} >{page-1}</Pagination.Item>}
                <Pagination.Item active>{page}</Pagination.Item>
                <Pagination.Item onClick={() => {
                    turnPage({
                        page: Number(page) + 1,
                    })
                }} >{Number(page)+1}</Pagination.Item>
                <Pagination.Next onClick={() => {
                    turnPage({
                        page: Number(page) + 1,
                    })
                }} />
        </Pagination>
    )
}

export default PaginationComponent;
