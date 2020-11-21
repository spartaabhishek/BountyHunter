const { db } = require('../firebase/firebaseApp')

var userConns = {}
var concurrentRooms = {}

function connection(conn){
    conn.on("message",handleMsg)
}

function send(user,message) { 
    userConn[user].send(JSON.stringify(message)); 
};

async function handleMsg(msg){
    let data = JSON.parse(msg);

    if(data.type==="connect-to-ws"){
        userConns[data.userId] = conn
    }

    else if(data.type=="connect-to-user"){
        const roomsRef = db.collection("rooms");
        const doc = await roomsRef.add({
            userId: data.userId,
            hunterId: data.hunterId,
            chat: []
        });
        
        roomsRef.doc(doc.id).onSnapshot(docSnapshot=>{
            const snap = docSnapshot.data()
            const user = snap.userId===snap.chat[-1].senderId?snap.hunterId:snap.userId
            const msg = snap.chat[-1].data
            send(user,{type:"message",data:msg,rooId:docSnapshot.id})
        })
    }

    else if(data.type==="message"){
        const roomsRef = db.collection("rooms").doc(data.id);
        const doc = await roomsRef.add({
            userId: data.userId,
            hunterId: data.hunterId,
            chat: []
        });
    }
}