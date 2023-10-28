import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const [myStyle, setMyStyle] = useState({
        backgroundColor: 'white',
        color: 'black'
        });
    const [btnText, setBtnText] = useState('Enable Dark Mode');
    const handleToggleStyle = () =>{
        if(myStyle.color === 'black'){
            setMyStyle({
                backgroundColor: '#212529',
                color: 'white'
            })
            setBtnText('Enable Light Mode')
        }
        else{
            setMyStyle({
                backgroundColor: 'white',
                color: 'black'
            })
            setBtnText('Enable Dark Mode')
        }
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        // console.log('UpperCase btn was clicked' + text)
        setText(newText);
        props.displayAlert('Text Converted to UpperCase', 'success');
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.displayAlert('Text Converted to LowerCase', 'success');
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.displayAlert('Text Cleared', 'warning');
    }

    const countVowels = () => {
        let vowelCount = 0; 
        text.split('').forEach(char => {
            if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
                vowelCount+=1;
        })
        document.querySelector('.vowelCount').innerHTML = `Vowels Count: ${vowelCount}`;
    }

    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value);
    }

    const handleCopy = () => {
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.displayAlert('Copied to Clipboard.', 'success');
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '));
        props.displayAlert('Extra spaces cleared.', 'success');
    }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={myStyle}></textarea>
                </div>
                <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1 ' onClick={handleUpClick}>Convert To UpperCase</button>
                <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert To LowerCase</button>
                <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={countVowels}>Count Vowels</button>
                <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
                <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Clear extra spaces</button>
                <button disabled = {text.length===0} className='btn btn-primary my-1 mx-1' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary my-1 mx-1' onClick={handleToggleStyle}>{btnText}</button>
            </div>
            <div className='container my-3 textSummary'>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((char) =>{return char.length !== 0}).length} <span className='wordCount'></span> words and {text.length} characters</p>
                <p>{0.08 * text.split('').filter((char) =>{return char.length !== 0}).length} Minutes of Read.</p>
                <p className='vowelCount'></p>
                <h2>Preview</h2>
                <p>{text.length===0? 'Nothing to Preview' : text}</p>
            </div>     
        </>
    )
}
