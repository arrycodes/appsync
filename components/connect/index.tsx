import styles from '../../app/page.module.css'
import { BCon } from './wallet'


const Connect = () => {

    

    return (

        <div className={styles.connect}>
<BCon />
<select>
<option> Select Chain </option>
<option> Ethereum </option>
<option> BSC </option>
<option> Poloygon </option>
<option> Avalnache </option>
<option> Fantom </option>
</select>
        </div>
    )
}

export default Connect