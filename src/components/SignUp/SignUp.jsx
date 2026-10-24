import flowerImage from '../../assets/blossom-flower.svg'
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection} aria-labelledby="signup-title">
        <div className={styles.formContent}>
          <h1 id="signup-title">Get Started Now</h1>
        </div>
      </section>
      <section className={styles.rightSection}>
        <img src={flowerImage} alt="Pink and yellow blossom flowers" />
      </section>
    </main>
  )
}

export default SignUp
