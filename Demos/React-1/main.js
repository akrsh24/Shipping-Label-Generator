const square= React.createElement('div',{
    style: {
        width:'100px',
        height:'100px',
        backgroundColor:'red',
        margin:'10px',
    }
})
 
const container=React.createElement('div',{
 style:{
     border:'5px solid blue'
    }},

    square,
    square
)

ReactDOM.render(container,document.getElementById('app'));