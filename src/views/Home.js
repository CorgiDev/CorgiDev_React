import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

//Images for page
import rinaTokyo from '../img/japan.jpg';
import kabukizaThumb from '../img/kabukiza.jpg';
import kabukizaFull from '../img/kabukiza-full.jpg';
import ghibliThumb from '../img/ghibli.jpg';
import ghibliFull from '../img/ghibli-full.jpg';
import rolexesThumb from '../img/rolexes.jpg';
import rolexesFull from '../img/rolexes-full.jpg';
import zeldaFull from '../img/zelda-full.jpg';
import zeldaThumb from '../img/zelda.jpg';

export default class Home extends Component {
    state = {
    }

    render() {
        return (
            <div id="wholePageContainer">
                <Header />
                <div id="wrapper">
                    <h1 class="mainHeadline">Welcome to CorgiDev!</h1>
                    <section>
                        <ul id="gallery">
                            <li>
                                <a href={rinaTokyo} data-lightbox="myGallery" data-title="My friend Rina, my boyfriend Mitch, and I in Tokyo, Japan.">
                                    <figure>
                                        <img src={rinaTokyo} alt="" />
                                        <figcaption>My friend Rina, my boyfriend Mitch, and I in Tokyo, Japan. Click for full image.</figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li>
                                <a href={kabukizaFull} data-lightbox="myGallery" data-title="Photo of me with a woman in a beautiful kimono at a shop in Kubukiza.">
                                    <figure>
                                        <img src={kabukizaThumb} alt="" />
                                        <figcaption>Photo of me with a woman in a beautiful kimono at a shop in Kubukiza. Click for full image.</figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li>
                                <a href={ghibliFull} data-lightbox="myGallery" data-title="Photo of me in front of the Laputa robot statue at the Ghibli Museum in Mikata, Tokyo, Japan.">
                                    <figure>
                                        <img src={ghibliThumb} alt="" />
                                        <figcaption>Photo of me in front of the "Laputa robot statue at the Ghibli Museum in Mikata, Tokyo, Japan. Click for full image.</figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li>
                                <a href={rolexesFull} data-lightbox="myGallery" data-title="Me at the Rolexes near Lexington, KY in 2016.">
                                    <figure>
                                        <img src={rolexesThumb} alt="" />
                                        <figcaption>Me at the Rolexes near Lexington, KY in 2016. Click for full image.</figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li>
                                <a href={zeldaFull} data-lightbox="myGallery" data-title="A screenshot of Link next to the Giant Horse in the Nintendo Switch game 'Legend of Zelda: Breath of the Wild'.">
                                    <figure>
                                        <img src={zeldaThumb} alt="" />
                                        <figcaption>A screenshot of Link next to the Giant Horse in the Nintendo Switch game "Legend of Zelda: Breath of the Wild". Click for full image.</figcaption>
                                    </figure>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <Footer />
                </div>
            </div>
        )
    }
}