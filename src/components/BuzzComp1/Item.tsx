import styles from "components/BuzzComp1/Item.module.css"
const Item = ({content, logo}: {content: string, logo: string}) => {
  return (
    <div className={styles.container}>{content} <img src={logo} alt="" /></div>
  )
}

export default Item