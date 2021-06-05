import React from 'react';
import NavBar from '../HomePage/Navbar/NavBar'
import './Contactus.css'

const ContactUs = () => {
    return (
        <div>
           <NavBar></NavBar>
            <section id="contact" class="contact-area">
                <div class="container">
                    <div class="section-title text-center ">
                        <h1 style={{ color: "#00AEEF" }}>Get In Touch!</h1>
                        <h3 >Feel free to contact us</h3>
                    </div>
                    <div class="row">
                        <div class="col-md-8 mx-auto">
                            <div class="py-3">
                                <form class="contact-form p-3" action="https://formspree.io/f/moqpyjvv" method="POST"
                                    id="contact-form">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="name" placeholder="Your name..." required />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="email"
                                            placeholder="Your email address..." required />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="subject" placeholder="Subject..."
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" rows="4" placeholder="Your message..."
                                            required></textarea>
                                    </div>
                                    <input type="submit" class="form-control" value="Send Message" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;