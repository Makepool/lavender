import PageContainer from '../components/page-container';
import hero from '../images/closeup-nails-1920.jpg';
import test from '../images/test.jpg';
import './nails.scss';

export default function Nails() {
    return (
        <PageContainer hero={<img src={hero} className="img" alt="1" />}>
            <div className="nails mobile-background">
                <div>
                    <div className="well">
                        <h2>Nails</h2>
                        <p>With any nail enhancement system, the most important part is the preparation of the natural nails. Thorough removal of dirt, oils and living tissue from the nail plate will ensure your nail enhancements will look beautiful, natural and last as long as possible. Care of your natural nails is just as important as the correct application method and all of this takes time. The quick fix methods can lead to severe, long term damage to your natural nails.</p>
                    </div>

                    <div className="well  after-prices">
                        <h2>Acrylic nails</h2>
                        <img src={test} />
                        <p>The acrylic nail system is very strong and when done correctly and with proper nail care, they can last a long time and are very robust. Acrylic nails are suitable for most people who want long-term nail enhancement.</p>
                        <p>The removal of acrylic nails is a soak-off method using acetone.</p>

                        <h2>Gel nails</h2>
                        <img src={test} />
                        <p>The gel nail system is more suited to someone who wants a temporary nail enhancement, as it is not quite as robust as the acrylic nail system but the products used don't have the strong odours of acrylic. Again, when the correct after care procedures are followed, the nails will last a long time and still look beautiful between in fills*</p>
                        <p>There are 2 different types of gel nail system;</p>
                        <p>Hard gels are better for nail extensions as they are the strongest option and can be in filled in the same way as acrylic nails.</p>
                        <p>The removal of hard gels is a file off method using nail files.</p>
                        <p>Soft/Soak-off gels are more suitable for simple overlays on the natural nails or for adding a coloured finish to acrylic or gel nail extensions. *This type of nail system is not suitable for in fills.</p>
                        <p>The removal process of soft/soak-off gel nails is traditionally a soak-off method using acetone.</p>

                        <h2>Silk/Fibreglass nails</h2>
                        <img src={test} />
                        <p>This type of nail system is most suitable for short term wear, for example; a party, wedding or weekend away. A silk or fibreglass strip is applied to your nails along with a strong resin and the nails can either be painted or buffed to a natural shine. This nail system looks the most natural but lacks the strength of acrylic and hard gel.</p>
                        <p>The removal of silk/fibreglass nails is a soak off method using acetone.</p>
                        <p>NB To avoid damage to the natural nails it is always advised you have your acrylic/gel/silk nails removed by your nail technician.</p>
                    </div>
                </div>

                <div>
                    <div className="boxout-prices">
                        <div className="row prices-header border-none">
                            <span className="desc">Fingers</span>
                            <span className="cost"></span>
                        </div>
                        <div className="row">
                            <span className="desc">Full Set (with artificial tips)</span>
                            <span className="cost">£30</span>
                        </div>
                        <div className="row">
                            <span className="desc">Full Set (sculptures)</span>
                            <span className="cost">£35</span>
                        </div>
                        <div className="row">
                            <span className="desc">Overlay on natural nails (clear)</span>
                            <span className="cost">£23</span>
                        </div>
                        <div className="row">
                            <span className="desc">French overlay</span>
                            <span className="cost">£25</span>
                        </div>
                        <div className="row">
                            <span className="desc">In-fills (3 weeks)</span>
                            <span className="cost">£20</span>
                        </div>
                        <div className="row">
                            <span className="desc">Nail Repair</span>
                            <span className="cost">£3</span>
                        </div>
                        <div className="row">
                            <span className="desc">Replacement Nail</span>
                            <span className="cost">£5</span>
                        </div>
                        <div className="row">
                            <span className="desc">Removal/Soak Off</span>
                            <span className="cost">£10 (£5 with new set)</span>
                        </div>
                        <div className="row">
                            <span className="desc">Add Glitter</span>
                            <span className="cost">+£2</span>
                        </div>
                        <div className="row">
                            <span className="desc">Add Colour</span>
                            <span className="cost">+£2</span>
                        </div>

                        <div className="row prices-header padding-top">
                            <span className="desc">Toes</span>
                            <span className="cost"></span>
                        </div>
                        <div className="row">
                            <span className="desc">Twinkle Toes (glitter)</span>
                            <span className="cost">£22</span>
                        </div>
                        <div className="row">
                            <span className="desc">Overlay (clear)</span>
                            <span className="cost">£20</span>
                        </div>
                        <div className="row">
                            <span className="desc">Overlay (colour)</span>
                            <span className="cost">£22</span>
                        </div>
                        <div className="row">
                            <span className="desc">Overlay (French)</span>
                            <span className="cost">£22</span>
                        </div>
                        <div className="row">
                            <span className="desc">Removal/Soak Off</span>
                            <span className="cost">£10 (£5 with new set)</span>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}