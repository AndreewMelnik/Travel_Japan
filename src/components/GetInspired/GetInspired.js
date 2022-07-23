import './GetInspired.css';
import GetInspiredCard from './GetInspiredCard';


function GetInspired() {
  return (
    <section class="trip">
                <div class="trip__caption">
                    <h2 class="trip__title">
                        Get inspired for your next trip
                    </h2>
                    <a class="trip__view-all" href="#!">VIEW ALL</a>
                </div>
                <div className="trip__cards">
                    <GetInspiredCard/>
                </div>div
    </section>
                );
}

export default GetInspired;
