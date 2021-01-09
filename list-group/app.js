let ListGroupItem = () => {
    return <div> <ul className="list-group">
  <ul class="list-group-item">Cras justo odio</ul>
  <ul class="list-group-item">Dapibus ac facilisis in</ul>
  <ul class="list-group-item">Morbi leo risus</ul>
  <ul class="list-group-item">Porta ac consectetur ac</ul>
  <ul class="list-group-item">Vestibulum at eros</ul>
</ul>
</div>
   
}

let ListGroup = () => {
    return <div>
    <ListGroupItem />
    
    </div>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))