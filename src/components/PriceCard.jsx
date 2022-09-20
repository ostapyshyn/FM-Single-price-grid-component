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
          <div>
            <h2>Monthly Subscription</h2>
            <p>$29 per month</p>
            <p>Full access for less than $1 a day</p>
            <button>Sign Up</button>
          </div>
          <div>
            <h2>Why Us</h2>
            <p>
              Tutorials by industry expertsPeer & expert code reviewCoding exercisesAccess to our
              GitHub reposCommunity forumFlashcard decksNew videos every week
            </p>
          </div>
        </footer>
      </article>
    </main>
  );
}

export default PriceCard;
