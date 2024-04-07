import './App.css';
import chatgptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import upgrade from './assets/rocket.svg';
import send from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMessageToOpenAI } from './openAI';
import { useState } from 'react';

function App() {
  const [Input,setInput]= useState("");
  const handleSend= async ()=>{
    const res= await sendMessageToOpenAI(Input)
    console.log(res)
  }
  return (
    <div className="App">
      <div className='sidebar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={chatgptLogo} alt='Logo ' className='logo' />
            <span className='brand'>ChatGPT</span>
            <button className='midBtn'>
              <img src={addBtn} alt='new Chat' className='addBtn' />
              New Chat
            </button>
          </div>
          <div className='upperSideBottom'>
            <button className='query'><img src={msgIcon} alt='Query' />
              What is Programming?
            </button>
            <button className='query'><img src={msgIcon} alt='Query' />
              What is OpenAI?
            </button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'>
            <img src={home} alt='home icon' className='listItemsImg' />Home
          </div>
          <div className='listItems'>
            <img src={saved} alt='bookmark' className='listItemsImg' />Saved
          </div>
          <div className='listItems'>
            <img src={upgrade} alt='rocket icon' className='listItemsImg' />Upgrade To Pro
          </div>

        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          <div className='chat'>
            <img className='chatImg' src={userIcon} alt='logo of chatgpt' />
            <p className='txt'>This is the content inside the chat app that is shown in the screen</p>
          </div>
          <div className='chat bot'>
            <img className='chatImg' src={gptImgLogo} alt='logo of chatgpt' />
            <p className='txt'>This is the content inside the chat app that is shown in the screen
              This is the content inside the chat app that is shown in the screen
              This is the content inside the chat app that is shown in the screen
              This is the content inside the chat app that is shown in the screen
              This is the content inside the chat app that is shown in the screen
            </p>
          </div>

        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Enter the message' value={Input}  onChange={(e)=>{setInput(e.target.value)}}/>
            <button className='send' onClick={handleSend}>
              <img src={send} alt='Send' />
            </button>
          </div>
          <p>ChatGPT may produce inaccurate information about </p>
        </div>
      </div>
    </div>
  );
}

export default App;
