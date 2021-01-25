const x =window.localStorage.getItem('id')
var a = window.localStorage.getItem('name');
var b = window.localStorage.getItem('date');
var c = window.localStorage.getItem('author');
var d = window.localStorage.getItem('content');

document.getElementById('author').value = c;
document.getElementById('postTitle').value = a;
document.getElementById('postContent').value = d;
document.getElementById('postDate').value = b;

function upDate(){
    var newTitle = document.getElementById('postTitle').value;
    var newauthor = document.getElementById('author').value;
    var newDate= document.getElementById('postDate').value;
    var newContent = document.getElementById('postContent').value;

    db.collection('posts').doc(x).set({
        author: newauthor,
        createdAt: newDate,
        postContent: newContent,
        postName: newTitle
    })
    alert('Post has been Updated !!!');
    setTimeout(function(){
        window.localStorage.clear();
        window.location = './';
    }, 1000);
}    

function clearId(){
    window.localStorage.clear();
    window.location = './';
}



