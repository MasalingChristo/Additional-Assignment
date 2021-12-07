import React from 'react'

function Product() {
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    
                    <div className="col mb-5">
                        <div className="card h-100">


                        <div className=" Header-card col mt-2 ">
                                
                                <div className="col container ">
                                    <button type="button" class="btn btn-light">New</button>
                                    <i class="bi bi-filter-right container"></i>
                                    <i class=" bi bi-heart ml-1 "></i>
                                </div>
                
                        </div>

                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugOkpj_ejnlZTm-A7yDYpyXbtpnpHmd1inQ&usqp=CAU" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Wooden Chair</h5>
                                    {/* <!-- Product reviews--> */}
                                    {/* <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div> */}
                                    
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">$12.000 <i class="bi bi-cart"></i></a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">

                        <div className=" Header-card col mt-2 ">
                                
                                <div className="col container ">
                                    <button type="button" class="btn btn-light">New</button>
                                    <i class="bi bi-filter-right container"></i>
                                    <i class=" bi bi-heart ml-1 "></i>
                                </div>
                
                        </div>

                            
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Wooden Chair</h5>
                                    {/* <!-- Product reviews--> */}
                                    {/* <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div> */}

                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" >$12.000<i className="bi bi-cart"></i></a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">

                        <div className=" Header-card col mt-2 ">
                                
                                <div className="col container ">
                                    <button type="button" class="btn btn-light">New</button>
                                    <i class="bi bi-filter-right container"></i>
                                    <i class=" bi bi-heart ml-1 "></i>
                                </div>
                
                        </div>

                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6A4WbohrAwcsfOwfhOIs6x965ZI1NWsRwQ&usqp=CAU" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Wooden Chair</h5>
                                    {/* <!-- Product reviews--> */}
                                    {/* <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div> */}
                                    
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">$12.000<i class="bi bi-cart"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;
