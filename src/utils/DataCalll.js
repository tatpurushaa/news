import parse from 'rss-to-json';

export class DataCalll {
  // Just simulating incremental loading, don't infer anything from here

  static async HomePage(start, count,tab='') {
    // return parse('https://newscatcher.p.rapidapi.com/v1/latest_headlines?lang=hi&country=IN&media=True').then(rss => {
    // consl rss ans see data strcture 
    // extract items var to full data var
     //const fullData1 = JSON.stringify(rss.items, null, 3);
    // console.log(JSON.stringify(rss.items, null, 3));

    // const fullData = rss.items;
    // const filteredData = fullData.slice(
    // start,
    // Math.min(fullData.length, start + count)
    //  );
    //console.log(tab);
if(tab!=''){
    console.log('in tb if ');
    var url = 'https://newscatcher.p.rapidapi.com/v1/search?q=a&lang=hi&sort_by=relevancy&country=IN&topic='+tab+'&page=1&media=True';
    console.log(url);
}else{
    //console.log('in tb else ');
    var url = 'https://newscatcher.p.rapidapi.com/v1/latest_headlines?lang=hi&country=IN&media=True';
}


    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '46056f171bmshf1d9f15217f845dp1bf764jsnd5df1ceae420',
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
      }
    };
    
    // fetch(url, options)
    //     .then(res => res.json())
    //     .then(json => console.log(json))
    //    var item = json.articles
    //     .catch(err => console.error('error:' + err));

    //     console.log(JSON.stringify(rss.items, null, 3));

    //     const fullData = item;
    //     const filteredData = fullData.slice(
    //     start,
    //     Math.min(fullData.length, start + count)
    //      );
    //      return fullData;

         const responseHusky = await fetch(url,options);
    const responseJsonHusky = await responseHusky.json();
    const fullData = responseJsonHusky.articles;
    
    console.log(fullData)
    const filteredData = fullData.slice(
      start,
      Math.min(fullData.length, start + count)
    );
    return fullData;
}
//console.log(fullData1);
        
     }


