export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">LIn 1995, Little Lemon was founded by two Finnish brothers, Arto and Matti. They noticed a dearth of Mediterranean cuisine in Helsinki despite the city's diversity and were determined to introduce those flavors to the community. Today, nearly thirty years later, the two brothers still manage and oversee the Little Lemon restaurant, ensuring its continued success..</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}