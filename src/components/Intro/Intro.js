import './Intro.css';
import Search from '../Search/Search'

function Intro() {
  return (
<div className="intro" id="sign-in">
                {/* <div class="wrapper">
                    <h1 class="intro__title">
                        Discover Amazing places in Japan
                    </h1>
                    <p class="intro__subtitle">
                        Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door,
                    </p>
                    <form class="search-form">
                        <fieldset class="search-form__wrap">
                            <p class="search-form__info">
                                <input class="search-form__field" type="text" name="user-like-to-do" placeholder="What would you like to do?" />
                                <input class="search-form__field" type="text" name="user-like-to-go" placeholder="Where would you like to go?" />
                                <button class="search-form__submit" type="submit">search</button>
                            </p>
                        </fieldset>
                    </form>
                </div> */}
                 <Search/>
            </div>
  );
}

export default Intro;