const request = require('request')

//variables


//functions
function doSearch(input){
		Search(input).then((result) => {
      //console.log(result);
			resetThumbs()
			createThumbs(result)
		}).catch((error) => {
			console.log(error)
		})
}

function changeInfo(input){
  getInfo(input).then((result) => {
    changeTitle(result.title)
    changeImg(result.poster)
    changeDisc(result.disc)
  }).catch((error) => {
    console.log(error)
  })
}

function changeTitle(title){
  document.getElementById('title').innerHTML = title
}
function changeImg(url){
  if(url == "N/A"){
    document.getElementById('bigImg').src = 'https://cdn.amctheatres.com/Media/Default/Images/noposter.jpg'
  }
  document.getElementById('bigImg').src = url
}

function changeDisc(text){
  document.getElementById('discription').innerHTML = text
}


function getInfo(title){
	return new Promise((resolve,reject) => {
		request({
			url: `http://www.omdbapi.com/?i=${encodeURIComponent(title)}&apikey=d8b2684e`,
			json: true
		}, (error, response, body) => {
			if (error){
				reject('cannot conect to OMDB')
			}else if(body.Response === 'False'){
				reject('cant find that movie')
			}else if (body.Response === 'True'){
				resolve({
					title: body.Title,
          poster: body.Poster,
          disc: body.Plot
        }
				);
			}
		});
	});
}

function Search(title){
	return new Promise((resolve,reject) => {
		request({
			url: 'http://www.omdbapi.com/?s='+ encodeURIComponent(title)+ '&apikey=d8b2684e',
			json: true
		 }, (error, response, body) => {
		 	if (error){
				reject('cannot conect to OMDB')
			}else if(body.status === 'False'){
				reject('cant find a movie with that name')
		 	}else if (body.Response === 'True'){
		 		resolve(body.Search);
		 	}
		});
	});
}

function resetThumbs(){
	document.getElementById('search_results').innerHTML = ''
}

function createThumbs(info){
  for(var i = 0; i < info.length; i++) {
    //console.log(info[i]);
    var newImg = document.createElement("img");
    document.getElementById("search_results").appendChild(newImg);
    newImg.className = "thumb"
    newImg.id = info[i].imdbID
    if (info[i].Poster == "N/A"){
      newImg.src = 'https://cdn.amctheatres.com/Media/Default/Images/noposter.jpg'
    }
    else{
      newImg.src = info[i].Poster
    }
  }
}

// event listeners
document.getElementById("search_but").addEventListener("click",function(){
	doSearch(document.getElementById("search_inp").value)
})

document.addEventListener("click",function(e){
  if(e.target.className == 'thumb'){
    changeInfo(e.target.id)
  }
})