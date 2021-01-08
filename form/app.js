let TextInput = () => {
    return <div>
        <input type="text" id="comment" name="comment" placeholder="Put Text here"></input>
    </div>
}

let YesNoRadio = () => {
    return <div>
        <input type="radio" name = "ans" value="yes"/> Yes
        <input type="radio" name = "ans" value="no"/> No
    </div>
}

let SubmitButton = () => {
    return <div>
        <button type="submit" value="Submit">Submit</button>
        </div>
}

let Form = () => {
    return <div>
    <div class="textInputs">
    <TextInput />
    <TextInput />
    <TextInput />
    </div>
    <div>
    <YesNoRadio /><YesNoRadio />
    </div>
    <div>
    <SubmitButton />
    </div>
    </div>
}


ReactDOM.render(<Form />, document.getElementById('root'))

