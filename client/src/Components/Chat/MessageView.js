import Chat from '../../Containers/Chat';
import SideBar from './SideBar';

const MessageView = () => {
    return (
        <div style={{display:"flex", margin:"0", height:'auto', width:'auto'}}>
            <SideBar />
            <Chat />
        </div>
    );
}
 
export default MessageView;