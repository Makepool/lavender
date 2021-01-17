import PageContainer from '../components/page-container';
import hero from '../images/closeup-nails-1920.jpg';

export default function Placeholder() {
    return (
        <PageContainer hero={<img src={hero} className="img" alt="1" />}>
            <div className="mobile-background">
                <p>Didn't get round to this page, it's only an example after all!</p>
            </div>
        </PageContainer>
    );
}