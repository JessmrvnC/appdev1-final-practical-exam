import flowerImage from '../../assets/blossom-flower.svg'
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection}></section>
      <section className={styles.rightSection}>
        <img src={flowerImage} alt="Pink and yellow blossom flowers" />
      </section>
    </main>
  )
}

export default SignUp
