import React from 'react';
import treatment from '../../../images/treatment.png';

const FeaturedService = () => {
    return (
       <section className='features-service pb-0 pb-md-5 my-5'>
           <div className="container mb-5">
               <div className="row mb-5">
                   <div className="col-md-5 mb-4 m-md-0">
                      <img className='img-fluid' src={treatment} alt="" />
                   </div>
                   <div className="col-md-7 align-self-center">
                     <h1> Exceptional Dentals Care, on Your Terms</h1>
                     <p className='text-secondary my-3'> Hic pariatur soluta sit facilis, totam dignissimos, doloremque quidem cupiditate provident illum ipsa nobis reiciendis officia ducimus minima porro reprehenderit, eveniet dolore quisquam voluptas illo aperiam aut adipisci tenetur? Hic illum aspernatur rem dolore error culpa, nemo, iure ad modi assumenda magni dicta quis voluptas eveniet consequuntur labore ipsum possimus alias.</p>
                    <button className="btn btn-primary"> Learn More </button>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default FeaturedService;