

//[url('https://thumbs.gfycat.com/DarkCarefulChuckwalla-max-1mb.gif')]

function Card (props) {
    
    const classes = "bg-[url('https://thumbs.gfycat.com/DarkCarefulChuckwalla-max-1mb.gif')] h-full w-full overflow-auto" + props.className;

    return <div class={classes}>{props.children}</div>
}

export default Card