import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
    return (
        <>
            <Layout>

                <main className='page'>
                    <section className='about-page'>
                        <article className=''>
                            <h2>
                                I'm a baby coloring book poke taxidermy
                            </h2>
                            <p>
                                Literally ugh chambray retro, poutine shabby chic flannel messenger bag lo-fi salvia authentic synth celiac gochujang.Truffaut YOLO farm-to-table, quinoa hoodie intelligentsia kinfolk flannel
                            </p>
                            <p>XOXO poutine fingerstache af prism. Selfies salvia chicharrones marfa unicorn biodiesel organic lomo praxis narwhal big mood. Hella</p>
                            <Link to='/contact' className='btn'>Contact</Link>
                        </article>

                        <StaticImage className="about-img" placeholder='blurred' src="../assets/images/about.jpeg" alt="person pouring salt in bowl" />

                    </section>
                </main>
            </Layout>
        </>

    )
}

export default About