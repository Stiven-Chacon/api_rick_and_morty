
const Pagination = ({prev, next, onAnterior, onSiguiente}) =>{

    const anterior = () =>{
        onAnterior();

    }
    const siguiente = () =>{
        onSiguiente();
        
    }
    return(
        <nav className="my-5">
            <ul className="pagination justify-content-center">
                {
                    prev ? (
                    <li className="page-item">
                    <button className="page-link" onClick={anterior}>Anterior</button>
                    </li>
                    ):null
                }

                {
                    next ? (
                    <li  className="page-item">
                        <button className="page-link" onClick={siguiente}>Siguiente</button>
                    </li>
                    ):null
                }
            </ul>
        </nav>
    )
}

export default Pagination;