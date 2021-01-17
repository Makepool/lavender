
import './about.scss';
import PageContainer from '../components/page-container';
import image from '../images/treatment-room-1534.jpg';

export default function About() {
    return (
        <PageContainer hero={<img src={image} className="img" alt="herosssssssssssss" />}>
            <div className="about mobile-background">
                <div className="well lavender">
                    <h2>About The Lavender Room</h2>
                    <p>I am a fully qualified Beauty Therapist and Nail Technician based in Nottinghamshire. I trained as a Beauty Therapist at Chestefield College where I achieved my NVQ Level 3 Beauty Therapy and also my VTCT Level 3 Diplomas in Aromatheraphy and Stone Therapy. My qualifications as a Nail Technician were achieved at Pinks Training Academy in Derby.</p>
                    <p>I have always had a very keen interest in the beauty industry and find helping people very rewarding.</p>
                    <p>I always try to ensure that my clients leave me looking and feeling good and it's nice to know that you have brightened someone's day.</p>
                    <p>Please take a moment to browse through my website and the treatments where I am sure you will find a treatment to suit you and your budget.</p>
                    <p>I look forward to seeing you soon.</p>
                    <p><em>Natalie</em></p>
                </div>

                <div className="well location">
                    <h2>Where are we?</h2>
                    <p itemProp="address" itemType="http://schema.org/PostalAddress">
                        <span itemProp="streetAddress">15 Langton Avenue</span><br/>
                        <span itemProp="addressLocality">Kirkby-in-Ashfield</span><br/>
                        <span itemProp="addressRegion">Nottinghamshire</span><br/>
                        <span itemProp="postalCode">NG17 8HE</span>
                    </p>
                    <div className="map"></div>
                </div>

                <div className="well contact-us">
                    <h2>Contact us</h2>
                    <p>For appointments or any queries, contact us on <strong itemProp="telephone">0754 4190 236</strong> or use the form below.</p>

                    {/* Only here for presentation purposes and isn't how you'd do a form in React */}
                    <form id="form" name="form1" action="contact-the-lavender-room.php" method="post">
                        <label htmlFor="name">* Name:</label>
                        <input type="text" name="name" required={true} autoComplete="name"/>

                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email"/>

                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" name="phone" id="phone"/>

                        <label htmlFor="message">* Message:</label>
                        <textarea name="message" rows={5} required={true}></textarea>

                        <input type="submit" value="Send"/>

                        <input type="hidden" name="oldtime" value="22:8:40"/>
                        <input type="hidden" name="newtime" value="22:8:40"/>
                    </form>

                    <p>Visit us on <a href="https://www.facebook.com/lavenderroom.homespa">Facebook</a>.</p>
                </div>
            </div>
        </PageContainer>
    );
}