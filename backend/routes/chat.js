var concurrentRooms = {}

function connection(conn){
    conn.on("message",handleMsg)
}

function handleMsg(msg){
    let data = JSON.parse(msg);

    if(data.type=="connect-user"){
        
    }
}