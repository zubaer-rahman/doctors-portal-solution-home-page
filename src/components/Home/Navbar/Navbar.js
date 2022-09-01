import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item me-5">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link" href="#">Dental Services</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-white disabled">Reviews</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-white disabled">Blog</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-white disabled">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;