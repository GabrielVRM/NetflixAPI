const API_KEY = '9487ed268a89f3a4c0d3fb2e751685eb';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
- Originais da Netflix
- Recomendados 
- Em Alta
- Ação 
- Comédia
- Terror
- Romance
- Documentários
*/

const language = 'language=pt-BR';
const basicFetch = async(endpoint)=> {
const req = await fetch (`${API_BASE}${endpoint}`);
const json =  await req.json();
return json;
}

export default {
    getHomeList: async() => {
return [
    {
        slug: 'originals',
        title: ' Originais da Netflix',
        items: await basicFetch(`/discover/tv?whit_network=213&${language}&api_key=${API_KEY}`)
        
    },
    {
        slug: 'trending',
        title: 'Recomendados',
        items: await basicFetch (`/trending/all/week?${language}&api_key=${API_KEY}`)
    },
    {
        slug: 'troprated',
        title: 'Em Alta',
        items: await basicFetch (`/movie/top_rated?${language}&api_key=${API_KEY}`)
    },
    {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch (`/discover/movie/?whit_genres=28${language}&api_key=${API_KEY}`)
    },
    {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch (`/discover/movie/?whit_genres=35${language}&api_key=${API_KEY}`)
    },
    {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch (`/discover/movie/?whit_genres=27${language}&api_key=${API_KEY}`)
    },
    {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch (`/discover/movie/?whit_genres=10749${language}&api_key=${API_KEY}`)
    },
    {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch (`/discover/movie/?whit_genres=99${language}&api_key=${API_KEY}`)
    },
];
   },

   getMovieInfo: async (movieId, type) => {
       let info = {};
       
       if(movieId) {
           switch(type) {
               case 'movie':
               info = await basicFetch(`/movie/${movieId}?${language}&api_key=${API_KEY}`)
           break;
           case 'tv':
               info = await basicFetch(`/tv/${movieId}?${language}&api_key=${API_KEY}`)
           break;
           default: 
           info = null;
           break;
            }
       }
       return info;
   }
    

}