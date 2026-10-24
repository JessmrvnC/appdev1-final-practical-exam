import flowerImage from '../../assets/blossom-flower.svg'
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection} aria-labelledby="signup-title">
        <form className={styles.formContent}>
          <h1 id="signup-title">Get Started Now</h1>

          <div className={styles.fields}>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
              />
            </label>

            <label>
              <span>Email address</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
            </label>

            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="Name"
                autoComplete="new-password"
              />
            </label>
          </div>

          <label className={styles.terms}>
            <input type="checkbox" name="terms" />
            <span>
              I agree to the <a href="#terms">terms &amp; policy</a>
            </span>
          </label>

          <button className={styles.signupButton} type="button">
            Signup
          </button>
        </form>
      </section>
      <section className={styles.rightSection}>
        <img src={flowerImage} alt="Pink and yellow blossom flowers" />
      </section>
    </main>
  )
}

export default SignUp
