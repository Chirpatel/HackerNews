import axios from 'axios';

export const topnews = async () =>{
    const url="https://hacker-news.firebaseio.com/v0/topstories.json"
    const data = await axios.get(url,{
        "print":"pretty"
    })
      .catch((error)=>{
        console.log(error)
      })
    return data.data;
}
export const newsid = async (props) =>{
  const url=`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`
  //console.log(url)
  const data = await axios.get(url,{
      "print":"pretty"
  })
    .catch((error)=>{
      console.log(error)
    })
  return data.data;
}