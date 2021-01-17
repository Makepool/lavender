import './times.scss';
import cn from 'classnames';

export default function Times() {
    const date = new Date();
    let int = date.getDay() - 1;
    if (int === -1) {
      int = 6;
    }

    const days = [
        {id: 0, day: 'Monday', times: '9am‑8pm'},
        {id: 1, day: 'Tuesday', times: '9am‑6pm'},
        {id: 2, day: 'Wednesday', times: '9am‑6pm'},
        {id: 3, day: 'Thursday', times: '9am‑8pm'},
        {id: 4, day: 'Friday', times: '9am‑6pm'},
        {id: 5, day: 'Saturday', times: '9am‑6pm'},
        {id: 6, day: 'Sunday', times: '9am‑6pm'}
    ];

    return (
        <div className="times">
            <table id="open-times" className="times__inner">
                <tbody>
                    {days.map((page: any) => (
                        <tr key={page.id} className={cn({today: int === page.id})}>
                            <td>{page.day}</td>
                            <td>{page.times}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}