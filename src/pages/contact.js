import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <main className='page'>
                <section className='contact-page'>
                    <article className='contact-info'>
                        <h3>Want To Get In Touch?</h3>
                        <p>
                            I'm baby kitsch iceland umami swag pug ascot viral bruh distillery tbh. Occupy DIY waistcoat fixie poutine. Hexagon hammock try-hard unicorn waistcoat helvetica ascot meditation master cleanse salvia pickled tbh mlkshk next level cray. Post-ironic crucifix meh, beard church-key big mood master cleanse raclette dreamcatcher live-edge locavore tilde. Tilde ugh poke retro godard blue bottle 8-bit intelligentsia kickstarter unicorn.
                        </p>
                    </article>
                    <article >
                        <form className='form contact-form'>
                            <div className='form-row'>
                                <label htmlFor="name">Your Name</label>
                                <input name="name" id="name" type="text"></input>
                            </div>
                            <div className='form-row'>
                                <label htmlFor="email">Your Email</label>
                                <input name="email" id="email" type="text"></input>
                            </div>
                            <div className='form-row'>
                                <label htmlFor="message">Your Message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                            <button type="submit" className='btn block'>Submit</button>
                        </form>
                    </article>

                </section>
            </main>
        </Layout>

    )
}

export default contact