
function Company (props) {
    return(
        <div className='company d-flex'>
          <div className='company__block d-flex flex-column align-items-center justify-content-between'>
            <div className="company__img-size d-flex align-items-center justify-content-center"><img src={props.image} width={props.width} height={props.height} alt="" className="company__img"/></div>
            <p className='company__name'>
              {props.title}
            </p>
            <button>
              Подробнее -{'>'}
            </button>
          </div>
        </div>
    )
}

export default Company;