import parse from 'rss-to-json';

export class DataCall {
  // Just simulating incremental loading, don't infer anything from here

  static async getnewss(start, count) {
    return parse('https://hindi.news18.com/rss/khabar/himachal-pradesh/himachal-pradesh.xml').then(rss => {
    // consl rss ans see data strcture 
    // extract items var to full data var
     //const fullData1 = JSON.stringify(rss.items, null, 3);
    console.log(JSON.stringify(rss.items, null, 3));

    const fullData = rss.items;
    const filteredData = fullData.slice(
    start,
    Math.min(fullData.length, start + count)
     );

    return fullData;
});
//console.log(fullData1);
        
     }

}
