import './GetInspired.css';

function GetInspired() {
  return (
<section class="trip">
                <div class="wrapper-lg">
                    <div class="trip__caption">
                        <h2 class="trip__title section__title">
                            Get inspired for your next trip
                        </h2>
                        <a class="trip__view-all" href="#!">VIEW ALL</a>
                    </div>
                    <div class="trip__cards">
                        <div class="trip__card trip__card--size-lg">
                            <figure>
                                <img className="trip__card-pic trip__card-pic--size-lg" src="assets/img/mount-fuji-min.jpg" alt="Mount Fuji"/>
                                <figcaption class="trip__card-title">
                                    Mount Fuji
                                </figcaption>
                            </figure>
                            <a class="trip__card-link" href="#!"></a>
                        </div>
                        <div class="trip__card trip__card--size-lg">
                            <figure>
                                <img className="trip__card-pic trip__card-pic--size-lg" src="assets/img/kyoto-min.jpg" alt="Kyoto"/>
                                <figcaption class="trip__card-title">
                                    Kyoto
                                </figcaption>
                            </figure>
                            <a class="trip__card-link" href="#!"></a>
                        </div>

                        <div class="trip__card trip__card--size-sm">
                            <figure>
                                <img className="trip__card-pic trip__card-pic--size-sm" src="assets/img/tokyo-min.jpg" alt="Tokyo"/>
                                <figcaption class="trip__card-title">
                                    Tokyo
                                </figcaption>
                            </figure>
                            <a class="trip__card-link" href="#!"></a>
                        </div>

                        <div class="trip__card trip__card--size-sm">
                            <figure>
                                <img className="trip__card-pic trip__card-pic--size-sm" src="assets/img/niigata-min.jpg" alt="Niigata"/>
                                <figcaption class="trip__card-title">
                                    Niigata
                                </figcaption>
                            </figure>
                            <a class="trip__card-link" href="#"></a>
                        </div>

                        <div class="trip__card trip__card--size-sm">
                            <figure>
                                <img className="trip__card-pic trip__card-pic--size-sm" src="assets/img/sapporo-min.jpg" alt="Sapporo"/>
                                <figcaption class="trip__card-title">
                                    Sapporo
                                </figcaption>
                            </figure>
                            <a class="trip__card-link" href="#!"></a>
                        </div>
                    </div>
                </div>
    </section>
                );
}

export default GetInspired;
