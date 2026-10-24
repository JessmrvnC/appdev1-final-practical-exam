import appleLogo from '../../assets/icons-apple-logo.svg'
import flowerImage from '../../assets/blossom-flower.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
import styles from './Login.module.css'

function Login() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection} aria-labelledby="login-title">
        <form className={styles.formContent}>
          <h1 id="login-title">Welcome back!</h1>
          <p className={styles.subtitle}>
            Enter your Credentials to access your account
          </p>

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

          <div className={styles.divider} aria-hidden="true">
            <span>Or</span>
          </div>

          <div className={styles.socialButtons}>
            <button type="button">
              <img src={googleLogo} alt="" />
              <span>Sign in with Google</span>
            </button>
            <button type="button">
              <img src={appleLogo} alt="" />
              <span>Sign in with Apple</span>
            </button>
          </div>

          <p className={styles.signInPrompt}>
            Have an account? <a href="#sign-in">Sign In</a>
          </p>
        </form>
      </section>
      <section className={styles.rightSection}>
        <img src={flowerImage} alt="Pink and yellow blossom flowers" />
      </section>
    </main>
  )
}

export default Login
