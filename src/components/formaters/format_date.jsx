function FormatDate({date_str}) {
    const date = new Date(date_str);
    
    return (
    <>
        <span className="display-5">{ date.getDate() }</span>
        <span className="fs-6 fw-lighter">.{ date.getMonth() }. { date.getFullYear() }</span>
    </>
    )
}

export default FormatDate;