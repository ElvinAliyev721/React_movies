import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import './BasketPage.css'

const BasketPage = () => {
  return (
    <div className='container'>
    <div className='text-center p-3'>
      <h1 className='display-4'>Your Basket</h1>
    </div>
    <div className='p-3'>
      {JSON.parse(window.localStorage.getItem('data'))?JSON.parse(window.localStorage.getItem('data'))
          .map((x)=>(<div className="accordion mt-2" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              <b className='fs-2 fw-bold'>{x.title}</b>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
            {x.movies.map(y=>(
            <div className='d-flex align-items-center film-card' key={y.imdbid}>
              <img src={y.poster} className='basket-img' />
              <h2 className='basket-film-title ms-4'>{y.title} ({y.year})</h2>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>)):<div className='text-center'><h1 className='text-muted fs-3 mt-3'>You haven't any film list!</h1><div className='text-center'><img className='mt-2' src='https://freesvg.org/storage/img/thumb/cartoonSharedFolder.png'/></div></div>}
    </div>
    </div>
  )
}

export default BasketPage;

{/* <>
    <div className='container'>
    <div className='text-center p-3'>
        <h1 className='display-5'>Your Basket <b className='fw-bold'>Name</b></h1>
        </div>
        <div className='d-flex justify-content-center align-items-between flex-column card-cont'>
    {
      JSON.parse(window.localStorage.getItem('data')).map((x)=>(
      <div className='text-center'>
        <h3 className='fw-bold mt-3'>{x.title}</h3>
        {x.movies.map(y=>(
          <div className='d-flex align-items-between film-card' key={y.imdbid}>
          <img src={y.poster} className='basket-img' />
          <h2 className='basket-film-title ms-4'>{y.title} ({y.year})</h2>
        </div>
        ))}
      </div>
      ))
    }
    </div>
    </div>
    </> */}




