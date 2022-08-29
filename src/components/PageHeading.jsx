
const PageHeading = ( { heading, subheading }) => {
    return (
        <div>
            <h1>{heading}</h1>
            <h5 className="mb-3 text-muted">{subheading}</h5>
            <hr/>
        </div>
    )
}

export default PageHeading
