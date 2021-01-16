import './times.scss';

export default function Times() {
    return (
        <div className="times">
            <table id="open-times" className="times__inner">
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>9am‑8pm</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>9am‑6pm</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>9am‑6pm</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>9am‑8pm</td>
                    </tr>
                    <tr className="today">
                        <td>Friday</td>
                        <td>9am‑6pm</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>9am‑6pm</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>12am‑6pm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}