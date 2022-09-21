import React from 'react';
import styles from '../assets/scss/priceCard.module.scss';

function PriceCard() {
  return (
    <main>
      <article>
        <header>
          <h1>Join our community</h1>
          <h2>30-day, hassle-free money back guarantee</h2>
          <p>
            Gain access to our full library of tutorials along with expert code reviews. Perfect for
            any developers who are serious about honing their skills.
          </p>
        </header>

        <footer>
          <div className={styles.subscribe}>
            <h2>Monthly Subscription</h2>

            <div className={styles.price}>
              <h3>$29</h3>
              <span>per month</span>
            </div>

            <p>Full access for less than $1 a day</p>
            <button>Sign Up</button>
          </div>
          <div className={styles.about}>
            <h2>Why Us</h2>
            <p>
              Tutorials by industry experts
              <br />
              Peer & expert code review
              <br />
              Coding exercises
              <br />
              Access to our GitHub repos
              <br />
              Community forum
              <br />
              Flashcard decks
              <br />
              New videos every week
            </p>
          </div>
        </footer>
      </article>
    </main>
  );
}

export default PriceCard;
