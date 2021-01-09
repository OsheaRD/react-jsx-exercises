let ProfilePic = () => {
    return <div>  
<img src="img/react cookbook.png" alt="Italian Trulli"></img>
    </div>
}

let Gossip = () => {
  return  <div>
    <h3>Baby Shark doo odood doodododod</h3>
    <h3>Baby Shark doo odood doodododod</h3>
    <h3>Baby Shark doo odood doodododod</h3>
    </div>
}

let CommentBody = () => {
    return <div class="userName">
<h1> This Is A Bold UserName</h1>
<h3>{Gossip()}</h3>
    </div>
}



let Comment = () => {
    return <div>
        <ProfilePic />
        <CommentBody />

    </div>
}

let Comments = () => {
    return <div>
      <Comment />
      <Comment />
      <Comment />
    </div>
}

ReactDOM.render(<Comments />, document.getElementById('root'))