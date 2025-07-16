function Container({children, className=''}){
    return (
        <div className={`px-5 md:px-16 lg:px-24 xl:px-28 ${className}`}>
            {children}
        </div>
    )
}

export default Container;