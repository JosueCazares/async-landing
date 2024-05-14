const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC9ryqA2CCnz5vH9KBBz8F7w&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2188c58943mshc7b5b7466877ba7p1eb799jsnc22d7fb1293c',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(url){
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}

(async()=>{
    try{
        const videos = await fetchData(url);
        let view = `
        ${videos.items.map(video =>`
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
        `).slice(0,4).join('')} 
        `; 
        content.innerHTML = view; 
    }catch(error){
        console.log(error);
    }
})(); 