import React from 'react';

const Home = () => {
    return (
        <section>
            <div className="container-fluid py-4 mx-5">
                <div className="row">
                    <div className="col-11">
                        <h2 className="text-center">My Portfolio:</h2>
                    </div>
                    <div className="col-11 content">
                        <p className="pt-4 text-center">
                            This is my React App portolio, which I hope to continuosly add to and improve.
                            If you have any questions, please contact me via my email on the Contact Page.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h3 className="text-center">About Me:</h3>
                    </div>
                    <div className="col-11 content">
                        <p className="pt-4 text-center">
                            I graduated the fullstack web development bootcamp at the University of Oregon at the end of January, 2022.
                            I have lived in the Portland Metro area my whole life and my hobbies include video games, music, and weightlifting.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;