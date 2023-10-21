import styles from './Messeges.module.css'
import Messegeslist from '../components/Messegeslist'
import Messegesdisplay from '../components/Messegesdisplay'
function Messages(){
return(
    <div className={styles.message_box_flex}>
        <Messegeslist/>
        <Messegesdisplay/>
    </div>
);
}
export default Messages;