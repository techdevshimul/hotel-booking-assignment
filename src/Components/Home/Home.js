import React, { Component } from 'react'
import { connect } from 'react-redux';
import { success } from "../../notify";
import { Button } from "reactstrap"
import { Link } from 'react-router-dom';
import { categoriesUrl, itemsUrl } from '../../Redux/dataBase';

const mapStateToProps = state => {
    return {
        items: state.items,
        itemLoading: state.itemLoading,
        itemErr: state.itemErr,
        selectedItem: state.selectedItem,
        selectedCategory: state.selectedCategory,
        comments: state.comments,
        commentLoading: state.commentLoading,
        categoryLoading: state.categoryLoading,
        commentErr: state.commentErr,
        categoryErr: state.categoryErr
    }
}

class Home extends Component {
    componentDidUpdate() {
        if (!this.props.itemLoading && !this.props.commentLoading && !this.props.categoryLoading && !this.props.categoryErr && !this.props.itemErr && !this.props.commentErr) {
            success("Database Updated...", true);
        }
    }
    render() {
        document.title = "Home - Hotel Booking App";

        return (
            <div >
                <div>
                    <div className='p-2 m-2' style={{ backgroundColor: "white", textAlign: "center", borderRadius: "10px" }}>
                        <div>
                            <div style={{ width: "100%", marginBottom: "10px" }}>
                                <img className="img-fluid" alt="Home" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg" style={{ aspectRatio: "16/9", objectFit: 'cover', width: "100%", height: "300px", borderRadius: "10px" }} />
                            </div>
                            <h1>Find your next stay</h1>
                            <p style={{ fontSize: "20px", color: "grey" }}>Set in Western Georgia, Paragraph Resort & Spa Shekvetili, Autograph Collection offers 5-star accommodations with an outdoor pool, kids' club, sports facilities and a fitness center. The hotel features a 430 m3 aquarium with a diverse selection of fish species. There is also a spa, an indoor pool and saunas.

                            </p>
                            <Link to={itemsUrl}>
                                <Button color="primary" className='m-2'>Browse Rooms</Button>
                            </Link>
                            <Link to={categoriesUrl}>
                                <Button color="secondary" className='m-2'>Browse Categories</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='p-2 m-2' style={{ backgroundColor: "white", textAlign: "center", borderRadius: "10px" }}>
                        <div style={{ margin: "25px 5px 25px 5px" }} >
                            <h2>Why We Are The Best?</h2>
                            <p style={{ fontSize: "18px", color: "grey" }}>
                                We have a wide range of hotel deals and promotions throughout the year, all of which can be found on our deals page. If you're a member of our Genius loyalty program, you can also sign in to your account to see discounted rates at select hotels and other properties.
                            </p>
                            <div className='d-flex justify-content-center flex-wrap'>
                                <img style={{ aspectRatio: "16/9", objectFit: 'cover', width: "300px", height: "200px", borderRadius: "5px", margin: "5px" }} alt="Sample" src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" />

                                <img style={{ aspectRatio: "16/9", objectFit: 'cover', width: "300px", height: "200px", borderRadius: "5px", margin: "5px" }} alt="Sample" src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg" />

                                <img style={{ aspectRatio: "16/9", objectFit: 'cover', width: "300px", height: "200px", borderRadius: "5px", margin: "5px" }} alt="Sample" src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className='p-2 m-2' style={{ backgroundColor: "white", textAlign: "center", borderRadius: "10px" }}>
                        <div style={{ margin: "25px 5px 25px 5px" }} >
                            <h2>Why Should You Trust Us?</h2>
                            <p style={{ fontSize: "18px", color: "grey" }}>
                                You can trust Hotel.com hotel reviews because guests can only leave a review after they stay at a hotel. This way you get verified reviews written by real Hotel.com guests.


                            </p>
                            <div className='d-flex justify-content-center flex-wrap'>
                                <img style={{ aspectRatio: "16/9", objectFit: 'cover', width: "300px", height: "200px", borderRadius: "5px", margin: "5px" }} alt="Sample" src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg" />

                                <img style={{ aspectRatio: "16/9", objectFit: 'cover', width: "300px", height: "200px", borderRadius: "5px", margin: "5px" }} alt="Sample" src="https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg" />

                                <img style={{ aspectRatio: "16/9", objectFit: 'cover', width: "300px", height: "200px", borderRadius: "5px", margin: "5px" }} alt="Sample" src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className='p-2 m-2' style={{ backgroundColor: "white", borderRadius: "10px", textAlign: "left" }}>
                        <div style={{ margin: "25px 5px 25px 5px" }} >
                            <h3>About Hotel : </h3>
                            <p style={{ fontSize: "18px", color: "grey" }}>
                                A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a refrigerator, and other kitchen facilities, upholstered chairs, a flat-screen television, and en-suite bathrooms.
                            </p>
                            <h4>History : </h4>
                            <p style={{ fontSize: "18px", color: "grey" }}>
                                Facilities offering hospitality to travellers featured in early civilizations. In Greco-Roman culture and in ancient Persia, hospitals for recuperation and rest were built at thermal baths. Guinness World Records officially recognised Japan's Nishiyama Onsen Keiunkan, founded in 705, as the oldest hotel in the world. During the Middle Ages, various religious orders at monasteries and abbeys would offer accommodation for travellers on the road.<br /><br />

                                The precursor to the modern hotel was the inn of medieval Europe, possibly dating back to the rule of Ancient Rome. These would provide for the needs of travellers, including food[2] and lodging, stabling and fodder for the traveller's horses and fresh horses for mail coaches. Famous London examples of inns include the George and the Tabard. A typical layout of an inn featured an inner court with bedrooms on the two sides, with the kitchen and parlour at the front and the stables at the back.
                            </p>
                            <h4>Resort hotels : </h4>
                            <p style={{ fontSize: "18px", color: "grey" }}>
                                Some hotels are built specifically as a destination in itself to create a captive trade, example at casinos, amusement parks and holiday resorts. Though hotels have always been built in popular destinations, the defining characteristic of a resort hotel is that it exists purely to serve another attraction, the two having the same owners.<br /><br />

                                On the Las Vegas Strip there is a tradition of one-upmanship with luxurious and extravagant hotels in a concentrated area. This trend now has extended to other resorts worldwide, but the concentration in Las Vegas is still the world's highest: nineteen of the world's twenty-five largest hotels by room count are on the Strip, with a total of over 67,000 rooms.


                            </p>
                            <h4>Conclusion : </h4>
                            <p style={{ fontSize: "18px", color: "grey" }}>
                                In 2006, Guinness World Records listed the First World Hotel in Genting Highlands, Malaysia, as the world's largest hotel with a total of 6,118 rooms (and which has now expanded to 7,351 rooms).[37] The Izmailovo Hotel in Moscow has the most beds, with 7,500, followed by The Venetian and The Palazzo complex in Las Vegas (7,117 rooms) and MGM Grand Las Vegas complex (6,852 rooms).[self-published source?]
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);