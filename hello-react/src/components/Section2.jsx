import icon1 from "./../assets/icon1.png";
import icon2 from "./../assets/icon2.png";
import icon3 from "./../assets/icon3.png";
import icon4 from "./../assets/icon4.png";

function Section2() {
    return (
        <section id="gallery">
            <div class="compend">
                <img src={icon1} alt="icon1" />
                <p class="title">Declarative</p>
                <p class="desc">React makes it painless to create interactive UIs</p>
            </div>
            <div class="compend">
                <img src={icon2} alt="icon2" />
                <p class="title">Components</p>
                <p class="desc">Build encapsulated components that manage their state.</p>
            </div>
            <div class="compend">
                <img src={icon3} alt="icon3" />
                <p class="title">Single-Way</p>
                <p class="desc">A set of immutable values are passed to the component's.</p>
            </div>
            <div class="compend">
                <img src={icon4} alt="icon4" />
                <p class="title">JSX</p>
                <p class="desc">Statically-typed, designed to run on modern browsers.</p>
            </div>
        </section>
    )
}

export default Section2