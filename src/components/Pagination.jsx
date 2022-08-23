import Pagination from 'react-bootstrap/Pagination'

const PaginationComponent = ( {page, nextPage, prevPage} ) => {
    return (
        <Pagination>
                <Pagination.Prev onClick={prevPage}/>
                {page!=1 && <Pagination.Item>{page-1}</Pagination.Item>}
                <Pagination.Item active>{page}</Pagination.Item>
                <Pagination.Item>{page+1}</Pagination.Item>
                <Pagination.Next onClick={nextPage} />
        </Pagination>
    )
}

export default PaginationComponent;
